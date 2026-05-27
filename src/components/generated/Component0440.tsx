import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper034 } from '../../helpers/helper034';

    export function Component0440({
      label = 'Button 0440',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(43, 68%, 42%)', borderRadius: 13 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper034"
          onClick={() => onApply(helper034(value))}
        >
          {label}
        </button>
      );
    }
