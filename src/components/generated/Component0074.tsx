import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper025 } from '../../helpers/helper025';

    export function Component0074({
      label = 'Button 0074',
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
          data-helper-id="helper025"
          onClick={() => onApply(helper025(value))}
        >
          {label}
        </button>
      );
    }
