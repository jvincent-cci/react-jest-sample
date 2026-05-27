import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper038 } from '../../helpers/helper038';

    export function Component0005({
      label = 'Button 0005',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(148, 68%, 42%)', borderRadius: 10 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper038"
          onClick={() => onApply(helper038(value))}
        >
          {label}
        </button>
      );
    }
