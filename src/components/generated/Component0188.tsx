import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper071 } from '../../helpers/helper071';

    export function Component0188({
      label = 'Button 0188',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(79, 68%, 42%)', borderRadius: 9 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper071"
          onClick={() => onApply(helper071(value))}
        >
          {label}
        </button>
      );
    }
