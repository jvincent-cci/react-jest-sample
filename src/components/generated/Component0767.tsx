import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper035 } from '../../helpers/helper035';

    export function Component0767({
      label = 'Button 0767',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(262, 68%, 42%)', borderRadius: 12 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper035"
          onClick={() => onApply(helper035(value))}
        >
          {label}
        </button>
      );
    }
