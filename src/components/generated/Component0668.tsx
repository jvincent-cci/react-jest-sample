import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper018 } from '../../helpers/helper018';

    export function Component0668({
      label = 'Button 0668',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(199, 68%, 42%)', borderRadius: 9 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper018"
          onClick={() => onApply(helper018(value))}
        >
          {label}
        </button>
      );
    }
