import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper030 } from '../../helpers/helper030';

    export function Component0422({
      label = 'Button 0422',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(97, 68%, 42%)', borderRadius: 11 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper030"
          onClick={() => onApply(helper030(value))}
        >
          {label}
        </button>
      );
    }
