import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper068 } from '../../helpers/helper068';

    export function Component0908({
      label = 'Button 0908',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(79, 68%, 42%)', borderRadius: 9 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper068"
          onClick={() => onApply(helper068(value))}
        >
          {label}
        </button>
      );
    }
