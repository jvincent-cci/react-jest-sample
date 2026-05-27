import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper083 } from '../../helpers/helper083';

    export function Component0225({
      label = 'Button 0225',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(8, 68%, 42%)', borderRadius: 6 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper083"
          onClick={() => onApply(helper083(value))}
        >
          {label}
        </button>
      );
    }
