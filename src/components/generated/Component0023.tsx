import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper056 } from '../../helpers/helper056';

    export function Component0023({
      label = 'Button 0023',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(94, 68%, 42%)', borderRadius: 12 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper056"
          onClick={() => onApply(helper056(value))}
        >
          {label}
        </button>
      );
    }
