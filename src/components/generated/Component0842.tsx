import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper003 } from '../../helpers/helper003';

    export function Component0842({
      label = 'Button 0842',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(157, 68%, 42%)', borderRadius: 7 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper003"
          onClick={() => onApply(helper003(value))}
        >
          {label}
        </button>
      );
    }
