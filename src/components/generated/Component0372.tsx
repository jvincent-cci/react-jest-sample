import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper029 } from '../../helpers/helper029';

    export function Component0372({
      label = 'Button 0372',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(47, 68%, 42%)', borderRadius: 9 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper029"
          onClick={() => onApply(helper029(value))}
        >
          {label}
        </button>
      );
    }
