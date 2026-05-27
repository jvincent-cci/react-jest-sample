import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper076 } from '../../helpers/helper076';

    export function Component0981({
      label = 'Button 0981',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(260, 68%, 42%)', borderRadius: 10 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper076"
          onClick={() => onApply(helper076(value))}
        >
          {label}
        </button>
      );
    }
