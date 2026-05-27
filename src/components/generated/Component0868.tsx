import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper092 } from '../../helpers/helper092';

    export function Component0868({
      label = 'Button 0868',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(39, 68%, 42%)', borderRadius: 9 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper092"
          onClick={() => onApply(helper092(value))}
        >
          {label}
        </button>
      );
    }
