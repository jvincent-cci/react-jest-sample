import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper051 } from '../../helpers/helper051';

    export function Component0509({
      label = 'Button 0509',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(76, 68%, 42%)', borderRadius: 10 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper051"
          onClick={() => onApply(helper051(value))}
        >
          {label}
        </button>
      );
    }
