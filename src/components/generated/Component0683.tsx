import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper099 } from '../../helpers/helper099';

    export function Component0683({
      label = 'Button 0683',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(34, 68%, 42%)', borderRadius: 8 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper099"
          onClick={() => onApply(helper099(value))}
        >
          {label}
        </button>
      );
    }
