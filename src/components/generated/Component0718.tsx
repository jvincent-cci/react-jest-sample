import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper025 } from '../../helpers/helper025';

    export function Component0718({
      label = 'Button 0718',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(249, 68%, 42%)', borderRadius: 11 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper025"
          onClick={() => onApply(helper025(value))}
        >
          {label}
        </button>
      );
    }
