import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper036 } from '../../helpers/helper036';

    export function Component0208({
      label = 'Button 0208',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(99, 68%, 42%)', borderRadius: 13 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper036"
          onClick={() => onApply(helper036(value))}
        >
          {label}
        </button>
      );
    }
