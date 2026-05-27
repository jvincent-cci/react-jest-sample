import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper074 } from '../../helpers/helper074';

    export function Component0209({
      label = 'Button 0209',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(136, 68%, 42%)', borderRadius: 6 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper074"
          onClick={() => onApply(helper074(value))}
        >
          {label}
        </button>
      );
    }
