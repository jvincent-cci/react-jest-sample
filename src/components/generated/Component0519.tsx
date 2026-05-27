import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper061 } from '../../helpers/helper061';

    export function Component0519({
      label = 'Button 0519',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(86, 68%, 42%)', borderRadius: 12 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper061"
          onClick={() => onApply(helper061(value))}
        >
          {label}
        </button>
      );
    }
