import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper007 } from '../../helpers/helper007';

    export function Component0425({
      label = 'Button 0425',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(208, 68%, 42%)', borderRadius: 6 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper007"
          onClick={() => onApply(helper007(value))}
        >
          {label}
        </button>
      );
    }
