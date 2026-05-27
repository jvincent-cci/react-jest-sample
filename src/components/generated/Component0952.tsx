import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper064 } from '../../helpers/helper064';

    export function Component0952({
      label = 'Button 0952',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(267, 68%, 42%)', borderRadius: 13 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper064"
          onClick={() => onApply(helper064(value))}
        >
          {label}
        </button>
      );
    }
