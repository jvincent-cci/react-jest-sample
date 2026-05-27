import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper010 } from '../../helpers/helper010';

    export function Component0298({
      label = 'Button 0298',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(189, 68%, 42%)', borderRadius: 7 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper010"
          onClick={() => onApply(helper010(value))}
        >
          {label}
        </button>
      );
    }
