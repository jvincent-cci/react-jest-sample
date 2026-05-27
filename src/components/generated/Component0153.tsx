import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper004 } from '../../helpers/helper004';

    export function Component0153({
      label = 'Button 0153',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(224, 68%, 42%)', borderRadius: 6 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper004"
          onClick={() => onApply(helper004(value))}
        >
          {label}
        </button>
      );
    }
