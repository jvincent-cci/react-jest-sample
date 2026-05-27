import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper041 } from '../../helpers/helper041';

    export function Component0923({
      label = 'Button 0923',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(274, 68%, 42%)', borderRadius: 8 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper041"
          onClick={() => onApply(helper041(value))}
        >
          {label}
        </button>
      );
    }
