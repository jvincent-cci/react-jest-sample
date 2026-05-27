import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper096 } from '../../helpers/helper096';

    export function Component0057({
      label = 'Button 0057',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(272, 68%, 42%)', borderRadius: 6 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper096"
          onClick={() => onApply(helper096(value))}
        >
          {label}
        </button>
      );
    }
