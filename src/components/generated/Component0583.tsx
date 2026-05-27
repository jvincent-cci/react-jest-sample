import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper027 } from '../../helpers/helper027';

    export function Component0583({
      label = 'Button 0583',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(294, 68%, 42%)', borderRadius: 12 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper027"
          onClick={() => onApply(helper027(value))}
        >
          {label}
        </button>
      );
    }
