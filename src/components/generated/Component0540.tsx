import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper047 } from '../../helpers/helper047';

    export function Component0540({
      label = 'Button 0540',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(143, 68%, 42%)', borderRadius: 9 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper047"
          onClick={() => onApply(helper047(value))}
        >
          {label}
        </button>
      );
    }
