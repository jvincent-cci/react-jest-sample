import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper076 } from '../../helpers/helper076';

    export function Component0211({
      label = 'Button 0211',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(210, 68%, 42%)', borderRadius: 8 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper076"
          onClick={() => onApply(helper076(value))}
        >
          {label}
        </button>
      );
    }
