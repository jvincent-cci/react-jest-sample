import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper013 } from '../../helpers/helper013';

    export function Component0405({
      label = 'Button 0405',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(188, 68%, 42%)', borderRadius: 10 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper013"
          onClick={() => onApply(helper013(value))}
        >
          {label}
        </button>
      );
    }
