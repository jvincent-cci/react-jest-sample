import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper010 } from '../../helpers/helper010';

    export function Component0803({
      label = 'Button 0803',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(154, 68%, 42%)', borderRadius: 8 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper010"
          onClick={() => onApply(helper010(value))}
        >
          {label}
        </button>
      );
    }
