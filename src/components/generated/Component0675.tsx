import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper072 } from '../../helpers/helper072';

    export function Component0675({
      label = 'Button 0675',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(98, 68%, 42%)', borderRadius: 8 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper072"
          onClick={() => onApply(helper072(value))}
        >
          {label}
        </button>
      );
    }
