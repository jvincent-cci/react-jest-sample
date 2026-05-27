import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper066 } from '../../helpers/helper066';

    export function Component0193({
      label = 'Button 0193',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(264, 68%, 42%)', borderRadius: 6 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper066"
          onClick={() => onApply(helper066(value))}
        >
          {label}
        </button>
      );
    }
