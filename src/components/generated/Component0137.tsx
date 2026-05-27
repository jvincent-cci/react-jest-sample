import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper057 } from '../../helpers/helper057';

    export function Component0137({
      label = 'Button 0137',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(352, 68%, 42%)', borderRadius: 6 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper057"
          onClick={() => onApply(helper057(value))}
        >
          {label}
        </button>
      );
    }
