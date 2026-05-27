import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper062 } from '../../helpers/helper062';

    export function Component0892({
      label = 'Button 0892',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(207, 68%, 42%)', borderRadius: 9 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper062"
          onClick={() => onApply(helper062(value))}
        >
          {label}
        </button>
      );
    }
