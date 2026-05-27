import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper093 } from '../../helpers/helper093';

    export function Component0234({
      label = 'Button 0234',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(341, 68%, 42%)', borderRadius: 7 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper093"
          onClick={() => onApply(helper093(value))}
        >
          {label}
        </button>
      );
    }
