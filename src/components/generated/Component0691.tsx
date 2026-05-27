import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper089 } from '../../helpers/helper089';

    export function Component0691({
      label = 'Button 0691',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(330, 68%, 42%)', borderRadius: 8 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper089"
          onClick={() => onApply(helper089(value))}
        >
          {label}
        </button>
      );
    }
