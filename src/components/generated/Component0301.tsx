import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper026 } from '../../helpers/helper026';

    export function Component0301({
      label = 'Button 0301',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(300, 68%, 42%)', borderRadius: 10 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper026"
          onClick={() => onApply(helper026(value))}
        >
          {label}
        </button>
      );
    }
