import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper080 } from '../../helpers/helper080';

    export function Component0819({
      label = 'Button 0819',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(26, 68%, 42%)', borderRadius: 8 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper080"
          onClick={() => onApply(helper080(value))}
        >
          {label}
        </button>
      );
    }
