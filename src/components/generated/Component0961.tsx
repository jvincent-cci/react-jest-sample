import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper050 } from '../../helpers/helper050';

    export function Component0961({
      label = 'Button 0961',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(240, 68%, 42%)', borderRadius: 6 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper050"
          onClick={() => onApply(helper050(value))}
        >
          {label}
        </button>
      );
    }
