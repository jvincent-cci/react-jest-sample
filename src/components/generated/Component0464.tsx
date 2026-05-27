import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper072 } from '../../helpers/helper072';

    export function Component0464({
      label = 'Button 0464',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(211, 68%, 42%)', borderRadius: 13 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper072"
          onClick={() => onApply(helper072(value))}
        >
          {label}
        </button>
      );
    }
