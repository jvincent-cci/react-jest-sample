import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper065 } from '../../helpers/helper065';

    export function Component0147({
      label = 'Button 0147',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(2, 68%, 42%)', borderRadius: 8 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper065"
          onClick={() => onApply(helper065(value))}
        >
          {label}
        </button>
      );
    }
