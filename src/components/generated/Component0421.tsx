import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper079 } from '../../helpers/helper079';

    export function Component0421({
      label = 'Button 0421',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(60, 68%, 42%)', borderRadius: 10 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper079"
          onClick={() => onApply(helper079(value))}
        >
          {label}
        </button>
      );
    }
