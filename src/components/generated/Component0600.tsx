import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper053 } from '../../helpers/helper053';

    export function Component0600({
      label = 'Button 0600',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(203, 68%, 42%)', borderRadius: 13 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper053"
          onClick={() => onApply(helper053(value))}
        >
          {label}
        </button>
      );
    }
