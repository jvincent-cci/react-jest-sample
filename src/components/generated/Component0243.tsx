import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper087 } from '../../helpers/helper087';

    export function Component0243({
      label = 'Button 0243',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(314, 68%, 42%)', borderRadius: 8 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper087"
          onClick={() => onApply(helper087(value))}
        >
          {label}
        </button>
      );
    }
