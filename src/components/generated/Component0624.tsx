import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper019 } from '../../helpers/helper019';

    export function Component0624({
      label = 'Button 0624',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(11, 68%, 42%)', borderRadius: 13 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper019"
          onClick={() => onApply(helper019(value))}
        >
          {label}
        </button>
      );
    }
