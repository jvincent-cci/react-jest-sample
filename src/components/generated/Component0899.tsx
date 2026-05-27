import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper054 } from '../../helpers/helper054';

    export function Component0899({
      label = 'Button 0899',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(106, 68%, 42%)', borderRadius: 8 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper054"
          onClick={() => onApply(helper054(value))}
        >
          {label}
        </button>
      );
    }
