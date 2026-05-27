import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper051 } from '../../helpers/helper051';

    export function Component0815({
      label = 'Button 0815',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(238, 68%, 42%)', borderRadius: 12 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper051"
          onClick={() => onApply(helper051(value))}
        >
          {label}
        </button>
      );
    }
