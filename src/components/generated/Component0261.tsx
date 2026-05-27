import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper043 } from '../../helpers/helper043';

    export function Component0261({
      label = 'Button 0261',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(260, 68%, 42%)', borderRadius: 10 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper043"
          onClick={() => onApply(helper043(value))}
        >
          {label}
        </button>
      );
    }
