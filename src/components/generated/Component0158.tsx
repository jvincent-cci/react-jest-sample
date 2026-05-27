import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper054 } from '../../helpers/helper054';

    export function Component0158({
      label = 'Button 0158',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(49, 68%, 42%)', borderRadius: 11 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper054"
          onClick={() => onApply(helper054(value))}
        >
          {label}
        </button>
      );
    }
