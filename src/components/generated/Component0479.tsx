import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper032 } from '../../helpers/helper032';

    export function Component0479({
      label = 'Button 0479',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(46, 68%, 42%)', borderRadius: 12 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper032"
          onClick={() => onApply(helper032(value))}
        >
          {label}
        </button>
      );
    }
