import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper016 } from '../../helpers/helper016';

    export function Component0586({
      label = 'Button 0586',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(45, 68%, 42%)', borderRadius: 7 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper016"
          onClick={() => onApply(helper016(value))}
        >
          {label}
        </button>
      );
    }
