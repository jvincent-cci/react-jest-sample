import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0033 } from './Component0033';
    import { helper083 } from '../../helpers/helper083';

    describe('Component0033', () => {
      it('applies helper083 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0033 label="Generated 0033" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0033' }));

        expect(onApply).toHaveBeenCalledWith(helper083('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0033 label="Generated 0033" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0033' })).toBeDisabled();
      });
    });
