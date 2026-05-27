import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper080 } from '../../helpers/helper080';

    export function Component0444({
      label = 'Button 0444',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(191, 68%, 42%)', borderRadius: 9 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper080"
          onClick={() => onApply(helper080(value))}
        >
          {label}
        </button>
      );
    }
