import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0419 } from './Component0419';
    import { helper029 } from '../../helpers/helper029';

    describe('Component0419', () => {
      it('applies helper029 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0419 label="Generated 0419" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0419' }));

        expect(onApply).toHaveBeenCalledWith(helper029('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0419 label="Generated 0419" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0419' })).toBeDisabled();
      });
    });
