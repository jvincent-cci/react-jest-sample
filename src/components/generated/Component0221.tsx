import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper070 } from '../../helpers/helper070';

    export function Component0221({
      label = 'Button 0221',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(220, 68%, 42%)', borderRadius: 10 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper070"
          onClick={() => onApply(helper070(value))}
        >
          {label}
        </button>
      );
    }
