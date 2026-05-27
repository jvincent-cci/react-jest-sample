import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper100 } from '../../helpers/helper100';

    export function Component0330({
      label = 'Button 0330',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(293, 68%, 42%)', borderRadius: 7 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper100"
          onClick={() => onApply(helper100(value))}
        >
          {label}
        </button>
      );
    }
