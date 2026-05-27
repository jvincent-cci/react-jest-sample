import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper036 } from '../../helpers/helper036';

    export function Component0495({
      label = 'Button 0495',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(278, 68%, 42%)', borderRadius: 12 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper036"
          onClick={() => onApply(helper036(value))}
        >
          {label}
        </button>
      );
    }
