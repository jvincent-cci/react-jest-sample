import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper077 } from '../../helpers/helper077';

    export function Component0728({
      label = 'Button 0728',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(259, 68%, 42%)', borderRadius: 13 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper077"
          onClick={() => onApply(helper077(value))}
        >
          {label}
        </button>
      );
    }
