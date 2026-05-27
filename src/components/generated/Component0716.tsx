import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper011 } from '../../helpers/helper011';

    export function Component0716({
      label = 'Button 0716',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(175, 68%, 42%)', borderRadius: 9 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper011"
          onClick={() => onApply(helper011(value))}
        >
          {label}
        </button>
      );
    }
