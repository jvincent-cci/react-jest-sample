import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper075 } from '../../helpers/helper075';

    export function Component0546({
      label = 'Button 0546',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(5, 68%, 42%)', borderRadius: 7 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper075"
          onClick={() => onApply(helper075(value))}
        >
          {label}
        </button>
      );
    }
