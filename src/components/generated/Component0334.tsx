import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper055 } from '../../helpers/helper055';

    export function Component0334({
      label = 'Button 0334',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(81, 68%, 42%)', borderRadius: 11 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper055"
          onClick={() => onApply(helper055(value))}
        >
          {label}
        </button>
      );
    }
