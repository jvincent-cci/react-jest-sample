import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0388 } from './Component0388';
    import { helper081 } from '../../helpers/helper081';

    describe('Component0388', () => {
      it('applies helper081 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0388 label="Generated 0388" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0388' }));

        expect(onApply).toHaveBeenCalledWith(helper081('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0388 label="Generated 0388" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0388' })).toBeDisabled();
      });
    });
