import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper067 } from '../../helpers/helper067';

    export function Component0729({
      label = 'Button 0729',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(296, 68%, 42%)', borderRadius: 6 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper067"
          onClick={() => onApply(helper067(value))}
        >
          {label}
        </button>
      );
    }
