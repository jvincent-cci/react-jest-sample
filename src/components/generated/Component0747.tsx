import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper039 } from '../../helpers/helper039';

    export function Component0747({
      label = 'Button 0747',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(242, 68%, 42%)', borderRadius: 8 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper039"
          onClick={() => onApply(helper039(value))}
        >
          {label}
        </button>
      );
    }
