import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper098 } from '../../helpers/helper098';

    export function Component0959({
      label = 'Button 0959',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(166, 68%, 42%)', borderRadius: 12 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper098"
          onClick={() => onApply(helper098(value))}
        >
          {label}
        </button>
      );
    }
