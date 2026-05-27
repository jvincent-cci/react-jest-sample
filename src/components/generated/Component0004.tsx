import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper023 } from '../../helpers/helper023';

    export function Component0004({
      label = 'Button 0004',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(111, 68%, 42%)', borderRadius: 9 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper023"
          onClick={() => onApply(helper023(value))}
        >
          {label}
        </button>
      );
    }
