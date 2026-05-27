import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0162 } from './Component0162';
    import { helper079 } from '../../helpers/helper079';

    describe('Component0162', () => {
      it('applies helper079 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0162 label="Generated 0162" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0162' }));

        expect(onApply).toHaveBeenCalledWith(helper079('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0162 label="Generated 0162" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0162' })).toBeDisabled();
      });
    });
