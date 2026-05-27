import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper008 } from '../../helpers/helper008';

    export function Component0679({
      label = 'Button 0679',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(246, 68%, 42%)', borderRadius: 12 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper008"
          onClick={() => onApply(helper008(value))}
        >
          {label}
        </button>
      );
    }
