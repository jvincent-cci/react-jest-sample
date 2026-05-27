import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0111 } from './Component0111';
    import { helper065 } from '../../helpers/helper065';

    describe('Component0111', () => {
      it('applies helper065 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0111 label="Generated 0111" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0111' }));

        expect(onApply).toHaveBeenCalledWith(helper065('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0111 label="Generated 0111" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0111' })).toBeDisabled();
      });
    });
