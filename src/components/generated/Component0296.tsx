import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper005 } from '../../helpers/helper005';

    export function Component0296({
      label = 'Button 0296',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(115, 68%, 42%)', borderRadius: 13 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper005"
          onClick={() => onApply(helper005(value))}
        >
          {label}
        </button>
      );
    }
