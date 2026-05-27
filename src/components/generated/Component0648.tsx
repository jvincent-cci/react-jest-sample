import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper095 } from '../../helpers/helper095';

    export function Component0648({
      label = 'Button 0648',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(179, 68%, 42%)', borderRadius: 13 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper095"
          onClick={() => onApply(helper095(value))}
        >
          {label}
        </button>
      );
    }
