import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper065 } from '../../helpers/helper065';

    export function Component0794({
      label = 'Button 0794',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(181, 68%, 42%)', borderRadius: 7 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper065"
          onClick={() => onApply(helper065(value))}
        >
          {label}
        </button>
      );
    }
