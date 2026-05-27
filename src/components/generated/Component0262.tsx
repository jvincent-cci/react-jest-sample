import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper014 } from '../../helpers/helper014';

    export function Component0262({
      label = 'Button 0262',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(297, 68%, 42%)', borderRadius: 11 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper014"
          onClick={() => onApply(helper014(value))}
        >
          {label}
        </button>
      );
    }
