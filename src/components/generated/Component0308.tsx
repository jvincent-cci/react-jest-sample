import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper074 } from '../../helpers/helper074';

    export function Component0308({
      label = 'Button 0308',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(199, 68%, 42%)', borderRadius: 9 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper074"
          onClick={() => onApply(helper074(value))}
        >
          {label}
        </button>
      );
    }
