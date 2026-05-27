import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0790 } from './Component0790';
    import { helper094 } from '../../helpers/helper094';

    describe('Component0790', () => {
      it('applies helper094 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0790 label="Generated 0790" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0790' }));

        expect(onApply).toHaveBeenCalledWith(helper094('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0790 label="Generated 0790" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0790' })).toBeDisabled();
      });
    });
