import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper024 } from '../../helpers/helper024';

    export function Component0266({
      label = 'Button 0266',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(85, 68%, 42%)', borderRadius: 7 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper024"
          onClick={() => onApply(helper024(value))}
        >
          {label}
        </button>
      );
    }
