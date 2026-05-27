import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper026 } from '../../helpers/helper026';

    export function Component0467({
      label = 'Button 0467',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(322, 68%, 42%)', borderRadius: 8 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper026"
          onClick={() => onApply(helper026(value))}
        >
          {label}
        </button>
      );
    }
