import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper093 } from '../../helpers/helper093';

    export function Component0692({
      label = 'Button 0692',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(7, 68%, 42%)', borderRadius: 9 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper093"
          onClick={() => onApply(helper093(value))}
        >
          {label}
        </button>
      );
    }
