import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper057 } from '../../helpers/helper057';

    export function Component0596({
      label = 'Button 0596',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(55, 68%, 42%)', borderRadius: 9 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper057"
          onClick={() => onApply(helper057(value))}
        >
          {label}
        </button>
      );
    }
