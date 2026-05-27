import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper037 } from '../../helpers/helper037';

    export function Component0187({
      label = 'Button 0187',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(42, 68%, 42%)', borderRadius: 8 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper037"
          onClick={() => onApply(helper037(value))}
        >
          {label}
        </button>
      );
    }
