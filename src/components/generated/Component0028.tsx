import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper083 } from '../../helpers/helper083';

    export function Component0028({
      label = 'Button 0028',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(279, 68%, 42%)', borderRadius: 9 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper083"
          onClick={() => onApply(helper083(value))}
        >
          {label}
        </button>
      );
    }
