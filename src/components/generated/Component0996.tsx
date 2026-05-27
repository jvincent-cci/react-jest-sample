import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper014 } from '../../helpers/helper014';

    export function Component0996({
      label = 'Button 0996',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(95, 68%, 42%)', borderRadius: 9 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper014"
          onClick={() => onApply(helper014(value))}
        >
          {label}
        </button>
      );
    }
