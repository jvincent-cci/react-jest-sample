import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper062 } from '../../helpers/helper062';

    export function Component0915({
      label = 'Button 0915',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(338, 68%, 42%)', borderRadius: 8 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper062"
          onClick={() => onApply(helper062(value))}
        >
          {label}
        </button>
      );
    }
