import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper065 } from '../../helpers/helper065';

    export function Component0527({
      label = 'Button 0527',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(22, 68%, 42%)', borderRadius: 12 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper065"
          onClick={() => onApply(helper065(value))}
        >
          {label}
        </button>
      );
    }
