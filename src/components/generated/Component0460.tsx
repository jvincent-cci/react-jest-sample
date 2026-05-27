import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper007 } from '../../helpers/helper007';

    export function Component0460({
      label = 'Button 0460',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(63, 68%, 42%)', borderRadius: 9 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper007"
          onClick={() => onApply(helper007(value))}
        >
          {label}
        </button>
      );
    }
