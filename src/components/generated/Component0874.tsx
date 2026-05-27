import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper094 } from '../../helpers/helper094';

    export function Component0874({
      label = 'Button 0874',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(261, 68%, 42%)', borderRadius: 7 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper094"
          onClick={() => onApply(helper094(value))}
        >
          {label}
        </button>
      );
    }
