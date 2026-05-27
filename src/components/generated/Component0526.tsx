import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper001 } from '../../helpers/helper001';

    export function Component0526({
      label = 'Button 0526',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(345, 68%, 42%)', borderRadius: 11 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper001"
          onClick={() => onApply(helper001(value))}
        >
          {label}
        </button>
      );
    }
