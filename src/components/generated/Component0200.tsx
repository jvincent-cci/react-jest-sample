import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper035 } from '../../helpers/helper035';

    export function Component0200({
      label = 'Button 0200',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(163, 68%, 42%)', borderRadius: 13 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper035"
          onClick={() => onApply(helper035(value))}
        >
          {label}
        </button>
      );
    }
