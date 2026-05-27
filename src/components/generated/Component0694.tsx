import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper054 } from '../../helpers/helper054';

    export function Component0694({
      label = 'Button 0694',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(81, 68%, 42%)', borderRadius: 11 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper054"
          onClick={() => onApply(helper054(value))}
        >
          {label}
        </button>
      );
    }
