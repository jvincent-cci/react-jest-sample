import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper082 } from '../../helpers/helper082';

    export function Component0135({
      label = 'Button 0135',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(278, 68%, 42%)', borderRadius: 12 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper082"
          onClick={() => onApply(helper082(value))}
        >
          {label}
        </button>
      );
    }
