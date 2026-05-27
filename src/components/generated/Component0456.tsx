import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper008 } from '../../helpers/helper008';

    export function Component0456({
      label = 'Button 0456',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(275, 68%, 42%)', borderRadius: 13 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper008"
          onClick={() => onApply(helper008(value))}
        >
          {label}
        </button>
      );
    }
