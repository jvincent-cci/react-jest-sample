import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper079 } from '../../helpers/helper079';

    export function Component0884({
      label = 'Button 0884',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(271, 68%, 42%)', borderRadius: 9 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper079"
          onClick={() => onApply(helper079(value))}
        >
          {label}
        </button>
      );
    }
