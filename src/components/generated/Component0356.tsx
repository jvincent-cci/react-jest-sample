import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper040 } from '../../helpers/helper040';

    export function Component0356({
      label = 'Button 0356',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(175, 68%, 42%)', borderRadius: 9 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper040"
          onClick={() => onApply(helper040(value))}
        >
          {label}
        </button>
      );
    }
