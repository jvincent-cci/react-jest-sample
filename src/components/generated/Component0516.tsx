import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper090 } from '../../helpers/helper090';

    export function Component0516({
      label = 'Button 0516',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(335, 68%, 42%)', borderRadius: 9 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper090"
          onClick={() => onApply(helper090(value))}
        >
          {label}
        </button>
      );
    }
