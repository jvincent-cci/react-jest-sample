import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper095 } from '../../helpers/helper095';

    export function Component0169({
      label = 'Button 0169',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(96, 68%, 42%)', borderRadius: 6 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper095"
          onClick={() => onApply(helper095(value))}
        >
          {label}
        </button>
      );
    }
