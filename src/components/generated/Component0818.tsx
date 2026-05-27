import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper050 } from '../../helpers/helper050';

    export function Component0818({
      label = 'Button 0818',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(349, 68%, 42%)', borderRadius: 7 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper050"
          onClick={() => onApply(helper050(value))}
        >
          {label}
        </button>
      );
    }
