import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper051 } from '../../helpers/helper051';

    export function Component0642({
      label = 'Button 0642',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(317, 68%, 42%)', borderRadius: 7 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper051"
          onClick={() => onApply(helper051(value))}
        >
          {label}
        </button>
      );
    }
