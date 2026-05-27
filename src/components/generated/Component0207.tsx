import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper043 } from '../../helpers/helper043';

    export function Component0207({
      label = 'Button 0207',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(62, 68%, 42%)', borderRadius: 12 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper043"
          onClick={() => onApply(helper043(value))}
        >
          {label}
        </button>
      );
    }
