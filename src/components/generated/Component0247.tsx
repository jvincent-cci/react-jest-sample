import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper068 } from '../../helpers/helper068';

    export function Component0247({
      label = 'Button 0247',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(102, 68%, 42%)', borderRadius: 12 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper068"
          onClick={() => onApply(helper068(value))}
        >
          {label}
        </button>
      );
    }
