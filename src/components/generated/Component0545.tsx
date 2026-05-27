import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper034 } from '../../helpers/helper034';

    export function Component0545({
      label = 'Button 0545',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(328, 68%, 42%)', borderRadius: 6 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper034"
          onClick={() => onApply(helper034(value))}
        >
          {label}
        </button>
      );
    }
