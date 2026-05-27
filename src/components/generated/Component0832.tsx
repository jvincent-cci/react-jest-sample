import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper042 } from '../../helpers/helper042';

    export function Component0832({
      label = 'Button 0832',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(147, 68%, 42%)', borderRadius: 13 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper042"
          onClick={() => onApply(helper042(value))}
        >
          {label}
        </button>
      );
    }
