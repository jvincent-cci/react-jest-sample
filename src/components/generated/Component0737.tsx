import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper088 } from '../../helpers/helper088';

    export function Component0737({
      label = 'Button 0737',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(232, 68%, 42%)', borderRadius: 6 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper088"
          onClick={() => onApply(helper088(value))}
        >
          {label}
        </button>
      );
    }
