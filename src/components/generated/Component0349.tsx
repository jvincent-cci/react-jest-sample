import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper005 } from '../../helpers/helper005';

    export function Component0349({
      label = 'Button 0349',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(276, 68%, 42%)', borderRadius: 10 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper005"
          onClick={() => onApply(helper005(value))}
        >
          {label}
        </button>
      );
    }
