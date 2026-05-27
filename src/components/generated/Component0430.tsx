import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper091 } from '../../helpers/helper091';

    export function Component0430({
      label = 'Button 0430',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(33, 68%, 42%)', borderRadius: 11 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper091"
          onClick={() => onApply(helper091(value))}
        >
          {label}
        </button>
      );
    }
