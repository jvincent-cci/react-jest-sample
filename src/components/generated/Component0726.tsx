import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper085 } from '../../helpers/helper085';

    export function Component0726({
      label = 'Button 0726',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(185, 68%, 42%)', borderRadius: 11 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper085"
          onClick={() => onApply(helper085(value))}
        >
          {label}
        </button>
      );
    }
