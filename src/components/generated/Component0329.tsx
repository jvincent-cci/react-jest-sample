import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper065 } from '../../helpers/helper065';

    export function Component0329({
      label = 'Button 0329',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(256, 68%, 42%)', borderRadius: 6 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper065"
          onClick={() => onApply(helper065(value))}
        >
          {label}
        </button>
      );
    }
