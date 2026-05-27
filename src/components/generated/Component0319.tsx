import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper067 } from '../../helpers/helper067';

    export function Component0319({
      label = 'Button 0319',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(246, 68%, 42%)', borderRadius: 12 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper067"
          onClick={() => onApply(helper067(value))}
        >
          {label}
        </button>
      );
    }
