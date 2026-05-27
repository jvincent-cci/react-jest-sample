import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper033 } from '../../helpers/helper033';

    export function Component0652({
      label = 'Button 0652',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(327, 68%, 42%)', borderRadius: 9 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper033"
          onClick={() => onApply(helper033(value))}
        >
          {label}
        </button>
      );
    }
