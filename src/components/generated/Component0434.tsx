import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper043 } from '../../helpers/helper043';

    export function Component0434({
      label = 'Button 0434',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(181, 68%, 42%)', borderRadius: 7 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper043"
          onClick={() => onApply(helper043(value))}
        >
          {label}
        </button>
      );
    }
