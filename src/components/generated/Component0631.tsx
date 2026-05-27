import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper081 } from '../../helpers/helper081';

    export function Component0631({
      label = 'Button 0631',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(270, 68%, 42%)', borderRadius: 12 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper081"
          onClick={() => onApply(helper081(value))}
        >
          {label}
        </button>
      );
    }
