import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper063 } from '../../helpers/helper063';

    export function Component0249({
      label = 'Button 0249',
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
          data-helper-id="helper063"
          onClick={() => onApply(helper063(value))}
        >
          {label}
        </button>
      );
    }
