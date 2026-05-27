import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper038 } from '../../helpers/helper038';

    export function Component0345({
      label = 'Button 0345',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(128, 68%, 42%)', borderRadius: 6 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper038"
          onClick={() => onApply(helper038(value))}
        >
          {label}
        </button>
      );
    }
