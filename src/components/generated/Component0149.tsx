import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper047 } from '../../helpers/helper047';

    export function Component0149({
      label = 'Button 0149',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(76, 68%, 42%)', borderRadius: 10 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper047"
          onClick={() => onApply(helper047(value))}
        >
          {label}
        </button>
      );
    }
