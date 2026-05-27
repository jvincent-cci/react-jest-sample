import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper016 } from '../../helpers/helper016';

    export function Component0027({
      label = 'Button 0027',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(242, 68%, 42%)', borderRadius: 8 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper016"
          onClick={() => onApply(helper016(value))}
        >
          {label}
        </button>
      );
    }
