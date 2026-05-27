import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper075 } from '../../helpers/helper075';

    export function Component0092({
      label = 'Button 0092',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(127, 68%, 42%)', borderRadius: 9 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper075"
          onClick={() => onApply(helper075(value))}
        >
          {label}
        </button>
      );
    }
