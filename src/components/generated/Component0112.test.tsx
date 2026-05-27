import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0112 } from './Component0112';
    import { helper037 } from '../../helpers/helper037';

    describe('Component0112', () => {
      it('applies helper037 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0112 label="Generated 0112" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0112' }));

        expect(onApply).toHaveBeenCalledWith(helper037('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0112 label="Generated 0112" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0112' })).toBeDisabled();
      });
    });
