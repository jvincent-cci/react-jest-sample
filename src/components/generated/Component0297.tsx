import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper070 } from '../../helpers/helper070';

    export function Component0297({
      label = 'Button 0297',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(152, 68%, 42%)', borderRadius: 6 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper070"
          onClick={() => onApply(helper070(value))}
        >
          {label}
        </button>
      );
    }
