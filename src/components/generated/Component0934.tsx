import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper026 } from '../../helpers/helper026';

    export function Component0934({
      label = 'Button 0934',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(321, 68%, 42%)', borderRadius: 11 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper026"
          onClick={() => onApply(helper026(value))}
        >
          {label}
        </button>
      );
    }
