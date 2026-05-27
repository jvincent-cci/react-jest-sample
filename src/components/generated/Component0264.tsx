import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper069 } from '../../helpers/helper069';

    export function Component0264({
      label = 'Button 0264',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(11, 68%, 42%)', borderRadius: 13 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper069"
          onClick={() => onApply(helper069(value))}
        >
          {label}
        </button>
      );
    }
