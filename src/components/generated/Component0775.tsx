import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper095 } from '../../helpers/helper095';

    export function Component0775({
      label = 'Button 0775',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(198, 68%, 42%)', borderRadius: 12 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper095"
          onClick={() => onApply(helper095(value))}
        >
          {label}
        </button>
      );
    }
