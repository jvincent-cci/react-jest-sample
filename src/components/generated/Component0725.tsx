import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper077 } from '../../helpers/helper077';

    export function Component0725({
      label = 'Button 0725',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(148, 68%, 42%)', borderRadius: 10 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper077"
          onClick={() => onApply(helper077(value))}
        >
          {label}
        </button>
      );
    }
