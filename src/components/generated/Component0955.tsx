import type { GeneratedButtonProps } from '../GeneratedButtonProps';
    import { helper009 } from '../../helpers/helper009';

    export function Component0955({
      label = 'Button 0955',
      value,
      onApply,
    }: GeneratedButtonProps) {
      const isDisabled = value.trim().length === 0;

      return (
        <button
          type="button"
          className="generated-button"
          style={{ backgroundColor: 'hsl(18, 68%, 42%)', borderRadius: 8 }}
          disabled={isDisabled}
          aria-label={`Run ${label}`}
          data-helper-id="helper009"
          onClick={() => onApply(helper009(value))}
        >
          {label}
        </button>
      );
    }
