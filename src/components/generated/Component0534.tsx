import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper085 } from '../../helpers/helper085';

    export function Component0534({
      label = 'Button 0534',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(281, 68%, 42%)', borderRadius: 11 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper085"
          onClick={() => onApply(helper085(value))}
        >
          {label}
        </button>
      );
    }
