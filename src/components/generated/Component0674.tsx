import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper049 } from '../../helpers/helper049';

    export function Component0674({
      label = 'Button 0674',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(61, 68%, 42%)', borderRadius: 7 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper049"
          onClick={() => onApply(helper049(value))}
        >
          {label}
        </button>
      );
    }
