import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper073 } from '../../helpers/helper073';

    export function Component0939({
      label = 'Button 0939',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(146, 68%, 42%)', borderRadius: 8 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper073"
          onClick={() => onApply(helper073(value))}
        >
          {label}
        </button>
      );
    }
