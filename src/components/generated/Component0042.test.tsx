import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0042 } from './Component0042';
    import { helper045 } from '../../helpers/helper045';

    describe('Component0042', () => {
      it('applies helper045 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0042 label="Generated 0042" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0042' }));

        expect(onApply).toHaveBeenCalledWith(helper045('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0042 label="Generated 0042" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0042' })).toBeDisabled();
      });
    });
