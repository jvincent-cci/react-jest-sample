import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper014 } from '../../helpers/helper014';

    export function Component0809({
      label = 'Button 0809',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(16, 68%, 42%)', borderRadius: 6 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper014"
          onClick={() => onApply(helper014(value))}
        >
          {label}
        </button>
      );
    }
