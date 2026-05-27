import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper072 } from '../../helpers/helper072';

    export function Component0999({
      label = 'Button 0999',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(206, 68%, 42%)', borderRadius: 12 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper072"
          onClick={() => onApply(helper072(value))}
        >
          {label}
        </button>
      );
    }
