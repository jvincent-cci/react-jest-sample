import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper022 } from '../../helpers/helper022';

    export function Component0983({
      label = 'Button 0983',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(334, 68%, 42%)', borderRadius: 12 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper022"
          onClick={() => onApply(helper022(value))}
        >
          {label}
        </button>
      );
    }
