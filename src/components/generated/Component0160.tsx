import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper099 } from '../../helpers/helper099';

    export function Component0160({
      label = 'Button 0160',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(123, 68%, 42%)', borderRadius: 13 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper099"
          onClick={() => onApply(helper099(value))}
        >
          {label}
        </button>
      );
    }
