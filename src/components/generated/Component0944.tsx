import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper036 } from '../../helpers/helper036';

    export function Component0944({
      label = 'Button 0944',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(331, 68%, 42%)', borderRadius: 13 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper036"
          onClick={() => onApply(helper036(value))}
        >
          {label}
        </button>
      );
    }
