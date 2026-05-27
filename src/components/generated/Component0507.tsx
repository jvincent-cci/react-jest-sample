import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper063 } from '../../helpers/helper063';

    export function Component0507({
      label = 'Button 0507',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(2, 68%, 42%)', borderRadius: 8 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper063"
          onClick={() => onApply(helper063(value))}
        >
          {label}
        </button>
      );
    }
