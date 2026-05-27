import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper097 } from '../../helpers/helper097';

    export function Component0282({
      label = 'Button 0282',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(317, 68%, 42%)', borderRadius: 7 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper097"
          onClick={() => onApply(helper097(value))}
        >
          {label}
        </button>
      );
    }
