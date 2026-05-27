import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper046 } from '../../helpers/helper046';

    export function Component0541({
      label = 'Button 0541',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(180, 68%, 42%)', borderRadius: 10 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper046"
          onClick={() => onApply(helper046(value))}
        >
          {label}
        </button>
      );
    }
