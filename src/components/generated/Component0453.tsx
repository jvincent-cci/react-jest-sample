import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper078 } from '../../helpers/helper078';

    export function Component0453({
      label = 'Button 0453',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(164, 68%, 42%)', borderRadius: 10 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper078"
          onClick={() => onApply(helper078(value))}
        >
          {label}
        </button>
      );
    }
