import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper044 } from '../../helpers/helper044';

    export function Component0068({
      label = 'Button 0068',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(319, 68%, 42%)', borderRadius: 9 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper044"
          onClick={() => onApply(helper044(value))}
        >
          {label}
        </button>
      );
    }
