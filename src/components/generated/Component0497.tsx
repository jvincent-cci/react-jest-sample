import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper086 } from '../../helpers/helper086';

    export function Component0497({
      label = 'Button 0497',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(352, 68%, 42%)', borderRadius: 6 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper086"
          onClick={() => onApply(helper086(value))}
        >
          {label}
        </button>
      );
    }
