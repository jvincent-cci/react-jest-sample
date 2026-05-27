import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper059 } from '../../helpers/helper059';

    export function Component0476({
      label = 'Button 0476',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(295, 68%, 42%)', borderRadius: 9 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper059"
          onClick={() => onApply(helper059(value))}
        >
          {label}
        </button>
      );
    }
