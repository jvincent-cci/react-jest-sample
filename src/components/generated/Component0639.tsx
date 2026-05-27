import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper033 } from '../../helpers/helper033';

    export function Component0639({
      label = 'Button 0639',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(206, 68%, 42%)', borderRadius: 12 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper033"
          onClick={() => onApply(helper033(value))}
        >
          {label}
        </button>
      );
    }
