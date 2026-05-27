import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper028 } from '../../helpers/helper028';

    export function Component0196({
      label = 'Button 0196',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(15, 68%, 42%)', borderRadius: 9 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper028"
          onClick={() => onApply(helper028(value))}
        >
          {label}
        </button>
      );
    }
