import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper090 } from '../../helpers/helper090';

    export function Component0991({
      label = 'Button 0991',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(270, 68%, 42%)', borderRadius: 12 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper090"
          onClick={() => onApply(helper090(value))}
        >
          {label}
        </button>
      );
    }
