import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper079 } from '../../helpers/helper079';

    export function Component0582({
      label = 'Button 0582',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(257, 68%, 42%)', borderRadius: 11 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper079"
          onClick={() => onApply(helper079(value))}
        >
          {label}
        </button>
      );
    }
