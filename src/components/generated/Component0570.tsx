import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper053 } from '../../helpers/helper053';

    export function Component0570({
      label = 'Button 0570',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(173, 68%, 42%)', borderRadius: 7 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper053"
          onClick={() => onApply(helper053(value))}
        >
          {label}
        </button>
      );
    }
