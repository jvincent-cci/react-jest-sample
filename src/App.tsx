import { useState } from 'react';
    import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';
import { Page3 } from './pages/Page3';
import { Page4 } from './pages/Page4';
import { Page5 } from './pages/Page5';
import { Page6 } from './pages/Page6';
import { Page7 } from './pages/Page7';
import { Page8 } from './pages/Page8';
import { Page9 } from './pages/Page9';
import { Page10 } from './pages/Page10';

    const pages = [
      { label: 'Page 1', Component: Page1 },
  { label: 'Page 2', Component: Page2 },
  { label: 'Page 3', Component: Page3 },
  { label: 'Page 4', Component: Page4 },
  { label: 'Page 5', Component: Page5 },
  { label: 'Page 6', Component: Page6 },
  { label: 'Page 7', Component: Page7 },
  { label: 'Page 8', Component: Page8 },
  { label: 'Page 9', Component: Page9 },
  { label: 'Page 10', Component: Page10 },
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
