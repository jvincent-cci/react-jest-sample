import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0731 } from './Component0731';
    import { helper079 } from '../../helpers/helper079';

    describe('Component0731', () => {
      it('applies helper079 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0731 label="Generated 0731" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0731' }));

        expect(onApply).toHaveBeenCalledWith(helper079('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0731 label="Generated 0731" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0731' })).toBeDisabled();
      });
    });
