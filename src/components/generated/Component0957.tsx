import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper015 } from '../../helpers/helper015';

    export function Component0957({
      label = 'Button 0957',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(92, 68%, 42%)', borderRadius: 10 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper015"
          onClick={() => onApply(helper015(value))}
        >
          {label}
        </button>
      );
    }
