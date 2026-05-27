import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0432 } from './Component0432';
    import { helper086 } from '../../helpers/helper086';

    describe('Component0432', () => {
      it('applies helper086 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0432 label="Generated 0432" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0432' }));

        expect(onApply).toHaveBeenCalledWith(helper086('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0432 label="Generated 0432" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0432' })).toBeDisabled();
      });
    });
