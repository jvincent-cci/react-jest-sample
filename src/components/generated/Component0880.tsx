import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper044 } from '../../helpers/helper044';

    export function Component0880({
      label = 'Button 0880',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(123, 68%, 42%)', borderRadius: 13 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper044"
          onClick={() => onApply(helper044(value))}
        >
          {label}
        </button>
      );
    }
