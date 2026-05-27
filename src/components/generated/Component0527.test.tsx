import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0527 } from './Component0527';
    import { helper065 } from '../../helpers/helper065';

    describe('Component0527', () => {
      it('applies helper065 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0527 label="Generated 0527" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0527' }));

        expect(onApply).toHaveBeenCalledWith(helper065('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0527 label="Generated 0527" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0527' })).toBeDisabled();
      });
    });
