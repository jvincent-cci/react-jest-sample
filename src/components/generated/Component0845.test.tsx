import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0845 } from './Component0845';
    import { helper035 } from '../../helpers/helper035';

    describe('Component0845', () => {
      it('applies helper035 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0845 label="Generated 0845" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0845' }));

        expect(onApply).toHaveBeenCalledWith(helper035('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0845 label="Generated 0845" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0845' })).toBeDisabled();
      });
    });
