import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper061 } from '../../helpers/helper061';

    export function Component0118({
      label = 'Button 0118',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(9, 68%, 42%)', borderRadius: 11 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper061"
          onClick={() => onApply(helper061(value))}
        >
          {label}
        </button>
      );
    }
