import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper024 } from '../../helpers/helper024';

    export function Component0724({
      label = 'Button 0724',
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
          data-helper-id="helper024"
          onClick={() => onApply(helper024(value))}
        >
          {label}
        </button>
      );
    }
