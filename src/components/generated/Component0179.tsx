import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper011 } from '../../helpers/helper011';

    export function Component0179({
      label = 'Button 0179',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(106, 68%, 42%)', borderRadius: 8 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper011"
          onClick={() => onApply(helper011(value))}
        >
          {label}
        </button>
      );
    }
