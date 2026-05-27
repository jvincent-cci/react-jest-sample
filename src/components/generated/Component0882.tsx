import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper040 } from '../../helpers/helper040';

    export function Component0882({
      label = 'Button 0882',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(197, 68%, 42%)', borderRadius: 7 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper040"
          onClick={() => onApply(helper040(value))}
        >
          {label}
        </button>
      );
    }
