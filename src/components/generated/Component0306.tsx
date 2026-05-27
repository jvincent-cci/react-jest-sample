import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper018 } from '../../helpers/helper018';

    export function Component0306({
      label = 'Button 0306',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(125, 68%, 42%)', borderRadius: 7 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper018"
          onClick={() => onApply(helper018(value))}
        >
          {label}
        </button>
      );
    }
