import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper064 } from '../../helpers/helper064';

    export function Component0969({
      label = 'Button 0969',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(176, 68%, 42%)', borderRadius: 6 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper064"
          onClick={() => onApply(helper064(value))}
        >
          {label}
        </button>
      );
    }
