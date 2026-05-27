import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper048 } from '../../helpers/helper048';

    export function Component0364({
      label = 'Button 0364',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(111, 68%, 42%)', borderRadius: 9 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper048"
          onClick={() => onApply(helper048(value))}
        >
          {label}
        </button>
      );
    }
