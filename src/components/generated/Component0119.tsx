import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper024 } from '../../helpers/helper024';

    export function Component0119({
      label = 'Button 0119',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(46, 68%, 42%)', borderRadius: 12 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper024"
          onClick={() => onApply(helper024(value))}
        >
          {label}
        </button>
      );
    }
