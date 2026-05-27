import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper025 } from '../../helpers/helper025';

    export function Component0533({
      label = 'Button 0533',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(244, 68%, 42%)', borderRadius: 10 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper025"
          onClick={() => onApply(helper025(value))}
        >
          {label}
        </button>
      );
    }
