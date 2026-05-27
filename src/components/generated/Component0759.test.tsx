import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0759 } from './Component0759';
    import { helper015 } from '../../helpers/helper015';

    describe('Component0759', () => {
      it('applies helper015 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0759 label="Generated 0759" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0759' }));

        expect(onApply).toHaveBeenCalledWith(helper015('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0759 label="Generated 0759" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0759' })).toBeDisabled();
      });
    });
