import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper021 } from '../../helpers/helper021';

    export function Component0851({
      label = 'Button 0851',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(130, 68%, 42%)', borderRadius: 8 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper021"
          onClick={() => onApply(helper021(value))}
        >
          {label}
        </button>
      );
    }
