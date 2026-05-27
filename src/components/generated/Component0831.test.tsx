import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0831 } from './Component0831';
    import { helper020 } from '../../helpers/helper020';

    describe('Component0831', () => {
      it('applies helper020 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0831 label="Generated 0831" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0831' }));

        expect(onApply).toHaveBeenCalledWith(helper020('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0831 label="Generated 0831" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0831' })).toBeDisabled();
      });
    });
