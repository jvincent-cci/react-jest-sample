import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper058 } from '../../helpers/helper058';

    export function Component0950({
      label = 'Button 0950',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(193, 68%, 42%)', borderRadius: 11 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper058"
          onClick={() => onApply(helper058(value))}
        >
          {label}
        </button>
      );
    }
