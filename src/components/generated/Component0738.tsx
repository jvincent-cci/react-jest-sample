import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper096 } from '../../helpers/helper096';

    export function Component0738({
      label = 'Button 0738',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(269, 68%, 42%)', borderRadius: 7 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper096"
          onClick={() => onApply(helper096(value))}
        >
          {label}
        </button>
      );
    }
