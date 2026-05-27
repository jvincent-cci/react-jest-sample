import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper012 } from '../../helpers/helper012';

    export function Component0735({
      label = 'Button 0735',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(158, 68%, 42%)', borderRadius: 12 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper012"
          onClick={() => onApply(helper012(value))}
        >
          {label}
        </button>
      );
    }
