import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper084 } from '../../helpers/helper084';

    export function Component0574({
      label = 'Button 0574',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(321, 68%, 42%)', borderRadius: 11 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper084"
          onClick={() => onApply(helper084(value))}
        >
          {label}
        </button>
      );
    }
