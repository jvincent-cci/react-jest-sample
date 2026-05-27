import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper017 } from '../../helpers/helper017';

    export function Component0661({
      label = 'Button 0661',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(300, 68%, 42%)', borderRadius: 10 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper017"
          onClick={() => onApply(helper017(value))}
        >
          {label}
        </button>
      );
    }
