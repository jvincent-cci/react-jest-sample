import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0779 } from './Component0779';
    import { helper037 } from '../../helpers/helper037';

    describe('Component0779', () => {
      it('applies helper037 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0779 label="Generated 0779" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0779' }));

        expect(onApply).toHaveBeenCalledWith(helper037('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0779 label="Generated 0779" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0779' })).toBeDisabled();
      });
    });
