import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper081 } from '../../helpers/helper081';

    export function Component0388({
      label = 'Button 0388',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(279, 68%, 42%)', borderRadius: 9 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper081"
          onClick={() => onApply(helper081(value))}
        >
          {label}
        </button>
      );
    }
