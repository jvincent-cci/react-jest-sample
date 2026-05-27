import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper021 } from '../../helpers/helper021';

    export function Component0937({
      label = 'Button 0937',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(72, 68%, 42%)', borderRadius: 6 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper021"
          onClick={() => onApply(helper021(value))}
        >
          {label}
        </button>
      );
    }
