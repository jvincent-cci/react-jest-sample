import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper029 } from '../../helpers/helper029';

    export function Component0696({
      label = 'Button 0696',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(155, 68%, 42%)', borderRadius: 13 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper029"
          onClick={() => onApply(helper029(value))}
        >
          {label}
        </button>
      );
    }
