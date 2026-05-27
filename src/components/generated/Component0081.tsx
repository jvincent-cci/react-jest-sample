import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper089 } from '../../helpers/helper089';

    export function Component0081({
      label = 'Button 0081',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(80, 68%, 42%)', borderRadius: 6 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper089"
          onClick={() => onApply(helper089(value))}
        >
          {label}
        </button>
      );
    }
