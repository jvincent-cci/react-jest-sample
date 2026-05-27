import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper017 } from '../../helpers/helper017';

    export function Component0455({
      label = 'Button 0455',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(238, 68%, 42%)', borderRadius: 12 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper017"
          onClick={() => onApply(helper017(value))}
        >
          {label}
        </button>
      );
    }
