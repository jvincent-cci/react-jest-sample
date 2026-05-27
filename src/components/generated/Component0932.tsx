import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper091 } from '../../helpers/helper091';

    export function Component0932({
      label = 'Button 0932',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(247, 68%, 42%)', borderRadius: 9 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper091"
          onClick={() => onApply(helper091(value))}
        >
          {label}
        </button>
      );
    }
