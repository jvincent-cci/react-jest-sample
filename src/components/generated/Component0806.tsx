import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper031 } from '../../helpers/helper031';

    export function Component0806({
      label = 'Button 0806',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(265, 68%, 42%)', borderRadius: 11 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper031"
          onClick={() => onApply(helper031(value))}
        >
          {label}
        </button>
      );
    }
