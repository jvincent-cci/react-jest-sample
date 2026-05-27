import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper033 } from '../../helpers/helper033';

    export function Component0757({
      label = 'Button 0757',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(252, 68%, 42%)', borderRadius: 10 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper033"
          onClick={() => onApply(helper033(value))}
        >
          {label}
        </button>
      );
    }
