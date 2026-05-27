import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper098 } from '../../helpers/helper098';

    export function Component0982({
      label = 'Button 0982',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(297, 68%, 42%)', borderRadius: 11 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper098"
          onClick={() => onApply(helper098(value))}
        >
          {label}
        </button>
      );
    }
