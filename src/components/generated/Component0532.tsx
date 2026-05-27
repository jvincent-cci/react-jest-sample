import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper093 } from '../../helpers/helper093';

    export function Component0532({
      label = 'Button 0532',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(207, 68%, 42%)', borderRadius: 9 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper093"
          onClick={() => onApply(helper093(value))}
        >
          {label}
        </button>
      );
    }
