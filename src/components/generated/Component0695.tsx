import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper045 } from '../../helpers/helper045';

    export function Component0695({
      label = 'Button 0695',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(118, 68%, 42%)', borderRadius: 12 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper045"
          onClick={() => onApply(helper045(value))}
        >
          {label}
        </button>
      );
    }
