import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper090 } from '../../helpers/helper090';

    export function Component0437({
      label = 'Button 0437',
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
          data-helper-id="helper090"
          onClick={() => onApply(helper090(value))}
        >
          {label}
        </button>
      );
    }
