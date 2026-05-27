import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper015 } from '../../helpers/helper015';

    export function Component0510({
      label = 'Button 0510',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(113, 68%, 42%)', borderRadius: 11 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper015"
          onClick={() => onApply(helper015(value))}
        >
          {label}
        </button>
      );
    }
