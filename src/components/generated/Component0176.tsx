import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper059 } from '../../helpers/helper059';

    export function Component0176({
      label = 'Button 0176',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(355, 68%, 42%)', borderRadius: 13 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper059"
          onClick={() => onApply(helper059(value))}
        >
          {label}
        </button>
      );
    }
