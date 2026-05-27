import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0321 } from './Component0321';
    import { helper024 } from '../../helpers/helper024';

    describe('Component0321', () => {
      it('applies helper024 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0321 label="Generated 0321" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0321' }));

        expect(onApply).toHaveBeenCalledWith(helper024('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0321 label="Generated 0321" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0321' })).toBeDisabled();
      });
    });
