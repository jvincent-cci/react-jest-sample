import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper085 } from '../../helpers/helper085';

    export function Component0688({
      label = 'Button 0688',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(219, 68%, 42%)', borderRadius: 13 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper085"
          onClick={() => onApply(helper085(value))}
        >
          {label}
        </button>
      );
    }
