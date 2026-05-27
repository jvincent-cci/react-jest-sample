import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper022 } from '../../helpers/helper022';

    export function Component0653({
      label = 'Button 0653',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(4, 68%, 42%)', borderRadius: 10 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper022"
          onClick={() => onApply(helper022(value))}
        >
          {label}
        </button>
      );
    }
