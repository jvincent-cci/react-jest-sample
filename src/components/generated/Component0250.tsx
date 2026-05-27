import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper058 } from '../../helpers/helper058';

    export function Component0250({
      label = 'Button 0250',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(213, 68%, 42%)', borderRadius: 7 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper058"
          onClick={() => onApply(helper058(value))}
        >
          {label}
        </button>
      );
    }
