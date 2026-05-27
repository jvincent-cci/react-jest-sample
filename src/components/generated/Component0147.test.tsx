import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0147 } from './Component0147';
    import { helper065 } from '../../helpers/helper065';

    describe('Component0147', () => {
      it('applies helper065 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0147 label="Generated 0147" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0147' }));

        expect(onApply).toHaveBeenCalledWith(helper065('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0147 label="Generated 0147" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0147' })).toBeDisabled();
      });
    });
