import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper071 } from '../../helpers/helper071';

    export function Component0766({
      label = 'Button 0766',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(225, 68%, 42%)', borderRadius: 11 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper071"
          onClick={() => onApply(helper071(value))}
        >
          {label}
        </button>
      );
    }
