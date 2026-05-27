import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper097 } from '../../helpers/helper097';

    export function Component0215({
      label = 'Button 0215',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(358, 68%, 42%)', borderRadius: 12 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper097"
          onClick={() => onApply(helper097(value))}
        >
          {label}
        </button>
      );
    }
