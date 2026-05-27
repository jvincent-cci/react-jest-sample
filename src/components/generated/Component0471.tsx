import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper064 } from '../../helpers/helper064';

    export function Component0471({
      label = 'Button 0471',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(110, 68%, 42%)', borderRadius: 12 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper064"
          onClick={() => onApply(helper064(value))}
        >
          {label}
        </button>
      );
    }
