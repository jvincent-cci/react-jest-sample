import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper052 } from '../../helpers/helper052';

    export function Component0505({
      label = 'Button 0505',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(288, 68%, 42%)', borderRadius: 6 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper052"
          onClick={() => onApply(helper052(value))}
        >
          {label}
        </button>
      );
    }
