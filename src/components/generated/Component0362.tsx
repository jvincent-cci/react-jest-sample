import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper052 } from '../../helpers/helper052';

    export function Component0362({
      label = 'Button 0362',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(37, 68%, 42%)', borderRadius: 7 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper052"
          onClick={() => onApply(helper052(value))}
        >
          {label}
        </button>
      );
    }
