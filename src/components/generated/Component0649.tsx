import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper026 } from '../../helpers/helper026';

    export function Component0649({
      label = 'Button 0649',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(216, 68%, 42%)', borderRadius: 6 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper026"
          onClick={() => onApply(helper026(value))}
        >
          {label}
        </button>
      );
    }
