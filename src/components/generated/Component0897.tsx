import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper031 } from '../../helpers/helper031';

    export function Component0897({
      label = 'Button 0897',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(32, 68%, 42%)', borderRadius: 6 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper031"
          onClick={() => onApply(helper031(value))}
        >
          {label}
        </button>
      );
    }
