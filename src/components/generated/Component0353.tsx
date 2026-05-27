import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper048 } from '../../helpers/helper048';

    export function Component0353({
      label = 'Button 0353',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(64, 68%, 42%)', borderRadius: 6 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper048"
          onClick={() => onApply(helper048(value))}
        >
          {label}
        </button>
      );
    }
