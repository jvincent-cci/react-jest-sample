import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0225 } from './Component0225';
    import { helper083 } from '../../helpers/helper083';

    describe('Component0225', () => {
      it('applies helper083 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0225 label="Generated 0225" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0225' }));

        expect(onApply).toHaveBeenCalledWith(helper083('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0225 label="Generated 0225" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0225' })).toBeDisabled();
      });
    });
