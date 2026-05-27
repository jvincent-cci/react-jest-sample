import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper035 } from '../../helpers/helper035';

    export function Component0607({
      label = 'Button 0607',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(102, 68%, 42%)', borderRadius: 12 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper035"
          onClick={() => onApply(helper035(value))}
        >
          {label}
        </button>
      );
    }
