import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper002 } from '../../helpers/helper002';

    export function Component0110({
      label = 'Button 0110',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(73, 68%, 42%)', borderRadius: 11 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper002"
          onClick={() => onApply(helper002(value))}
        >
          {label}
        </button>
      );
    }
