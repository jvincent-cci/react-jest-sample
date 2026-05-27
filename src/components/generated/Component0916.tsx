import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper007 } from '../../helpers/helper007';

    export function Component0916({
      label = 'Button 0916',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(15, 68%, 42%)', borderRadius: 9 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper007"
          onClick={() => onApply(helper007(value))}
        >
          {label}
        </button>
      );
    }
