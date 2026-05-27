import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0193 } from './Component0193';
    import { helper066 } from '../../helpers/helper066';

    describe('Component0193', () => {
      it('applies helper066 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0193 label="Generated 0193" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0193' }));

        expect(onApply).toHaveBeenCalledWith(helper066('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0193 label="Generated 0193" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0193' })).toBeDisabled();
      });
    });
