import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper075 } from '../../helpers/helper075';

    export function Component0563({
      label = 'Button 0563',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(274, 68%, 42%)', borderRadius: 8 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper075"
          onClick={() => onApply(helper075(value))}
        >
          {label}
        </button>
      );
    }
