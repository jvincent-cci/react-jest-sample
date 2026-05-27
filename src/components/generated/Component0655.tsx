import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper092 } from '../../helpers/helper092';

    export function Component0655({
      label = 'Button 0655',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(78, 68%, 42%)', borderRadius: 12 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper092"
          onClick={() => onApply(helper092(value))}
        >
          {label}
        </button>
      );
    }
