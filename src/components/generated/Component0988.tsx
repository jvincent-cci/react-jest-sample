import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper019 } from '../../helpers/helper019';

    export function Component0988({
      label = 'Button 0988',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(159, 68%, 42%)', borderRadius: 9 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper019"
          onClick={() => onApply(helper019(value))}
        >
          {label}
        </button>
      );
    }
