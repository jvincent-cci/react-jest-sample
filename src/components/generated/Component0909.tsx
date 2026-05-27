import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper022 } from '../../helpers/helper022';

    export function Component0909({
      label = 'Button 0909',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(116, 68%, 42%)', borderRadius: 10 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper022"
          onClick={() => onApply(helper022(value))}
        >
          {label}
        </button>
      );
    }
