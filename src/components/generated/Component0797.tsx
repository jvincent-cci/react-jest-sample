import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper080 } from '../../helpers/helper080';

    export function Component0797({
      label = 'Button 0797',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(292, 68%, 42%)', borderRadius: 10 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper080"
          onClick={() => onApply(helper080(value))}
        >
          {label}
        </button>
      );
    }
