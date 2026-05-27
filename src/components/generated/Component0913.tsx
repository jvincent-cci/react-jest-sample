import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper063 } from '../../helpers/helper063';

    export function Component0913({
      label = 'Button 0913',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(264, 68%, 42%)', borderRadius: 6 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper063"
          onClick={() => onApply(helper063(value))}
        >
          {label}
        </button>
      );
    }
