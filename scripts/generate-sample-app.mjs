import { mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const src = path.join(root, 'src');

const helperCount = 100;
const componentCount = 1000;
const pageCount = 10;
const fieldsPerPage = 100;

let seed = 42;

function random() {
  seed = (seed * 1664525 + 1013904223) >>> 0;
  return seed / 0x100000000;
}

function pick(max) {
  return Math.floor(random() * max);
}

function pickUnique(count, max) {
  const values = new Set();

  while (values.size < count) {
    values.add(pick(max));
  }

  return Array.from(values);
}

function pad(value, size = 3) {
  return String(value).padStart(size, '0');
}

function normalize(content) {
  return `${content.trim()}\n`;
}

async function write(relativePath, content) {
  const target = path.join(root, relativePath);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, normalize(content));
}

function helperBody(index) {
  const n = index + 1;
  const variant = index % 10;
  const suffix = `h${pad(n)}`;

  const operations = [
    `return \`\${normalized.toUpperCase()}-${suffix}\`;`,
    `return \`\${normalized.toLowerCase()}-${suffix}\`;`,
    `return \`\${normalized.split('').reverse().join('')}-${suffix}\`;`,
    `return \`\${normalized.replace(/\\s+/g, '-')}-${suffix}\`;`,
    `return \`\${normalized.length}-chars-${suffix}\`;`,
    `return \`\${normalized}_${suffix}_\${normalized.length}\`;`,
    `return \`\${normalized.slice(0, 8)}-${suffix}\`;`,
    `return \`\${normalized.repeat(2).slice(0, 24)}-${suffix}\`;`,
    `return \`\${normalized.split(/\\s+/).map((part) => part[0]?.toUpperCase() ?? '').join('')}-${suffix}\`;`,
    `return \`\${normalized.replace(/[aeiou]/gi, '*')}-${suffix}\`;`,
  ];

  return `
    export function helper${pad(n)}(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper${pad(n)} requires a non-empty input');
      }

      ${operations[variant]}
    }
  `;
}

function helperTestBody(index) {
  const n = index + 1;
  const id = pad(n);

  return `
    import { helper${id} } from './helper${id}';

    describe('helper${id}', () => {
      it('transforms valid input', () => {
        expect(helper${id}(' Sample Input ')).toContain('h${id}');
      });

      it('rejects blank input', () => {
        expect(() => helper${id}('   ')).toThrow('helper${id} requires a non-empty input');
      });
    });
  `;
}

function componentBody(index, helperIndex) {
  const n = index + 1;
  const componentId = pad(n, 4);
  const helperId = pad(helperIndex + 1);
  const hue = (index * 37) % 360;
  const radius = 6 + (index % 8);

  return `
    import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper${helperId} } from '../../helpers/helper${helperId}';

    export function Component${componentId}({
      label = 'Button ${componentId}',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(${hue}, 68%, 42%)', borderRadius: ${radius} }}
          disabled={isDisabled}
          aria-label={\`Run \${label}\`}
          data-helper-id="helper${helperId}"
          onClick={() => onApply(helper${helperId}(value))}
        >
          {label}
        </button>
      );
    }
  `;
}

function componentTestBody(index, helperIndex) {
  const n = index + 1;
  const componentId = pad(n, 4);
  const helperId = pad(helperIndex + 1);

  return `
    import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component${componentId} } from './Component${componentId}';
    import { helper${helperId} } from '../../helpers/helper${helperId}';

    describe('Component${componentId}', () => {
      it('applies helper${helperId} to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component${componentId} label="Generated ${componentId}" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated ${componentId}' }));

        expect(onApply).toHaveBeenCalledWith(helper${helperId}('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component${componentId} label="Generated ${componentId}" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated ${componentId}' })).toBeDisabled();
      });
    });
  `;
}

function pageBody(pageIndex, componentIndexes) {
  const pageNumber = pageIndex + 1;
  const imports = componentIndexes
    .map((componentIndex) => {
      const id = pad(componentIndex + 1, 4);
      return `import { Component${id} } from '../components/generated/Component${id}';`;
    })
    .join('\n');

  const rows = componentIndexes
    .map((componentIndex, fieldIndex) => {
      const componentId = pad(componentIndex + 1, 4);
      const valueKey = `values[${fieldIndex}]`;
      const label = `Page ${pageNumber} field ${fieldIndex + 1}`;

      return `
        <label className="input-card" key="${label}">
          <span>${label}</span>
          <input
            aria-label="${label} input"
            value={${valueKey}}
            onChange={(event) => updateValue(${fieldIndex}, event.target.value)}
          />
          <Component${componentId}
            label="${label}"
            value={${valueKey}}
            onApply={(nextValue) => updateValue(${fieldIndex}, nextValue)}
          />
        </label>
      `;
    })
    .join('\n');

  return `
    import { useState } from 'react';
    ${imports}

    const initialValues = Array.from({ length: ${fieldsPerPage} }, (_, index) => \`page-${pageNumber}-value-\${index + 1}\`);

    export function Page${pageNumber}() {
      const [values, setValues] = useState(initialValues);

      const updateValue = (index: number, value: string) => {
        setValues((currentValues) =>
          currentValues.map((currentValue, currentIndex) => (currentIndex === index ? value : currentValue)),
        );
      };

      return (
        <section aria-labelledby="page-${pageNumber}-title">
          <h2 id="page-${pageNumber}-title">Page ${pageNumber}</h2>
          <div className="input-grid">
            ${rows}
          </div>
        </section>
      );
    }
  `;
}

function pageTestBody(pageIndex) {
  const pageNumber = pageIndex + 1;

  return `
    import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Page${pageNumber} } from './Page${pageNumber}';

    describe('Page${pageNumber}', () => {
      it('updates an input through its generated button', async () => {
        const user = userEvent.setup();

        render(<Page${pageNumber} />);
        const input = screen.getByRole('textbox', { name: 'Page ${pageNumber} field 1 input' });

        await user.clear(input);
        await user.type(input, 'sample value');
        await user.click(screen.getByRole('button', { name: 'Run Page ${pageNumber} field 1' }));

        expect(input).not.toHaveValue('sample value');
        expect(input).not.toHaveValue('');
      });

      it('disables the generated button for blank input', async () => {
        const user = userEvent.setup();

        render(<Page${pageNumber} />);
        const input = screen.getByRole('textbox', { name: 'Page ${pageNumber} field 1 input' });

        await user.clear(input);

        expect(screen.getByRole('button', { name: 'Run Page ${pageNumber} field 1' })).toBeDisabled();
      });
    });
  `;
}

function appBody() {
  const imports = Array.from({ length: pageCount }, (_, index) => {
    const pageNumber = index + 1;
    return `import { Page${pageNumber} } from './pages/Page${pageNumber}';`;
  }).join('\n');

  const pageItems = Array.from({ length: pageCount }, (_, index) => {
    const pageNumber = index + 1;
    return `{ label: 'Page ${pageNumber}', Component: Page${pageNumber} }`;
  }).join(',\n  ');

  return `
    import { useState } from 'react';
    ${imports}

    const pages = [
      ${pageItems},
    ];

    export function App() {
      const [activePage, setActivePage] = useState(0);
      const ActivePage = pages[activePage].Component;

      return (
        <main className="app-shell">
          <h1>CircleCI Smarter Testing React Sample</h1>
          <p>
            Ten pages render one hundred inputs each. Every input is paired with a generated button component that
            applies one generated helper.
          </p>
          <nav className="page-nav" aria-label="Sample pages">
            {pages.map((page, index) => (
              <button
                type="button"
                key={page.label}
                aria-current={index === activePage ? 'page' : undefined}
                onClick={() => setActivePage(index)}
              >
                {page.label}
              </button>
            ))}
          </nav>
          <ActivePage />
        </main>
      );
    }
  `;
}

function appTestBody() {
  return `
    import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { App } from './App';

    describe('App', () => {
      it('navigates to another generated page', async () => {
        const user = userEvent.setup();

        render(<App />);
        await user.click(screen.getByRole('button', { name: 'Page 10' }));

        expect(screen.getByRole('heading', { name: 'Page 10' })).toBeInTheDocument();
      });

      it('starts on page 1 instead of page 10', () => {
        render(<App />);

        expect(screen.getByRole('heading', { name: 'Page 1' })).toBeInTheDocument();
        expect(screen.queryByRole('heading', { name: 'Page 10' })).not.toBeInTheDocument();
      });
    });
  `;
}

async function main() {
  await rm(path.join(src, 'helpers'), { recursive: true, force: true });
  await rm(path.join(src, 'components', 'generated'), { recursive: true, force: true });
  await rm(path.join(src, 'pages'), { recursive: true, force: true });

  for (let index = 0; index < helperCount; index += 1) {
    const id = pad(index + 1);
    await write(`src/helpers/helper${id}.ts`, helperBody(index));
    await write(`src/helpers/helper${id}.test.ts`, helperTestBody(index));
  }

  await write(
    'src/components/GeneratedButtonProps.ts',
    `
      export type GeneratedButtonProps = {
        label?: string;
        value: string;
        onApply: (value: string) => void;
      };
    `,
  );

  const helperAssignments = [];
  for (let index = 0; index < componentCount; index += 1) {
    const helperIndex = pick(helperCount);
    helperAssignments.push(helperIndex);
    const id = pad(index + 1, 4);
    await write(`src/components/generated/Component${id}.tsx`, componentBody(index, helperIndex));
    await write(`src/components/generated/Component${id}.test.tsx`, componentTestBody(index, helperIndex));
  }

  for (let pageIndex = 0; pageIndex < pageCount; pageIndex += 1) {
    const componentIndexes = pickUnique(fieldsPerPage, componentCount);
    await write(`src/pages/Page${pageIndex + 1}.tsx`, pageBody(pageIndex, componentIndexes));
    await write(`src/pages/Page${pageIndex + 1}.test.tsx`, pageTestBody(pageIndex));
  }

  await write('src/App.tsx', appBody());
  await write('src/App.test.tsx', appTestBody());
  await write(
    'src/main.tsx',
    `
      import React from 'react';
      import ReactDOM from 'react-dom/client';
      import { App } from './App';
      import './styles.css';

      ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
      );
    `,
  );

  await write(
    '.circleci/config.yml',
    `version: 2.1

jobs:
  test:
    docker:
      - image: cimg/node:lts
    steps:
      - checkout
      - restore_cache:
          keys:
            - npm-v1-{{ checksum "package-lock.json" }}
            - npm-v1-
      - run:
          name: Install dependencies
          command: npm ci
      - save_cache:
          key: npm-v1-{{ checksum "package-lock.json" }}
          paths:
            - ~/.npm
      - run:
          name: Run tests
          command: npm run test:ci
      - run:
          name: Build app
          command: npm run build

workflows:
  test:
    jobs:
      - test
`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
