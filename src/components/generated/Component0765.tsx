import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper006 } from '../../helpers/helper006';

    export function Component0765({
      label = 'Button 0765',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(188, 68%, 42%)', borderRadius: 10 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper006"
          onClick={() => onApply(helper006(value))}
        >
          {label}
        </button>
      );
    }
