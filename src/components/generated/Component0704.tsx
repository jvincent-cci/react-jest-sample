import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper001 } from '../../helpers/helper001';

    export function Component0704({
      label = 'Button 0704',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(91, 68%, 42%)', borderRadius: 13 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper001"
          onClick={() => onApply(helper001(value))}
        >
          {label}
        </button>
      );
    }
