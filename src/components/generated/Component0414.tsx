import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper080 } from '../../helpers/helper080';

    export function Component0414({
      label = 'Button 0414',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(161, 68%, 42%)', borderRadius: 11 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper080"
          onClick={() => onApply(helper080(value))}
        >
          {label}
        </button>
      );
    }
