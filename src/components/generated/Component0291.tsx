import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper047 } from '../../helpers/helper047';

    export function Component0291({
      label = 'Button 0291',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(290, 68%, 42%)', borderRadius: 8 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper047"
          onClick={() => onApply(helper047(value))}
        >
          {label}
        </button>
      );
    }
