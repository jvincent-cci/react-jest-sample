import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper007 } from '../../helpers/helper007';

    export function Component0985({
      label = 'Button 0985',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(48, 68%, 42%)', borderRadius: 6 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper007"
          onClick={() => onApply(helper007(value))}
        >
          {label}
        </button>
      );
    }
