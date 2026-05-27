import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper075 } from '../../helpers/helper075';

    export function Component0645({
      label = 'Button 0645',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(68, 68%, 42%)', borderRadius: 10 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper075"
          onClick={() => onApply(helper075(value))}
        >
          {label}
        </button>
      );
    }
