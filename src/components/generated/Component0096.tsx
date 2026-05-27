import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper083 } from '../../helpers/helper083';

    export function Component0096({
      label = 'Button 0096',
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
          data-helper-id="helper083"
          onClick={() => onApply(helper083(value))}
        >
          {label}
        </button>
      );
    }
