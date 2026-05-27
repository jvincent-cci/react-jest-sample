import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper022 } from '../../helpers/helper022';

    export function Component0814({
      label = 'Button 0814',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(201, 68%, 42%)', borderRadius: 11 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper022"
          onClick={() => onApply(helper022(value))}
        >
          {label}
        </button>
      );
    }
