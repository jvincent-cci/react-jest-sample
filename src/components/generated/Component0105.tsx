import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper020 } from '../../helpers/helper020';

    export function Component0105({
      label = 'Button 0105',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(248, 68%, 42%)', borderRadius: 6 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper020"
          onClick={() => onApply(helper020(value))}
        >
          {label}
        </button>
      );
    }
