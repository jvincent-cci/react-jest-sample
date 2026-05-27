import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper082 } from '../../helpers/helper082';

    export function Component0237({
      label = 'Button 0237',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(92, 68%, 42%)', borderRadius: 10 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper082"
          onClick={() => onApply(helper082(value))}
        >
          {label}
        </button>
      );
    }
