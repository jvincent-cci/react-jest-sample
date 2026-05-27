import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper034 } from '../../helpers/helper034';

    export function Component0697({
      label = 'Button 0697',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(192, 68%, 42%)', borderRadius: 6 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper034"
          onClick={() => onApply(helper034(value))}
        >
          {label}
        </button>
      );
    }
