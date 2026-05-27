import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper020 } from '../../helpers/helper020';

    export function Component0678({
      label = 'Button 0678',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(209, 68%, 42%)', borderRadius: 11 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper020"
          onClick={() => onApply(helper020(value))}
        >
          {label}
        </button>
      );
    }
