import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper060 } from '../../helpers/helper060';

    export function Component0360({
      label = 'Button 0360',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(323, 68%, 42%)', borderRadius: 13 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper060"
          onClick={() => onApply(helper060(value))}
        >
          {label}
        </button>
      );
    }
