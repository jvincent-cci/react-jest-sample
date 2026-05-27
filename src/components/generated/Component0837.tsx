import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper055 } from '../../helpers/helper055';

    export function Component0837({
      label = 'Button 0837',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(332, 68%, 42%)', borderRadius: 10 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper055"
          onClick={() => onApply(helper055(value))}
        >
          {label}
        </button>
      );
    }
