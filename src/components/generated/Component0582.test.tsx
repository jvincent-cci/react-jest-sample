import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0582 } from './Component0582';
    import { helper079 } from '../../helpers/helper079';

    describe('Component0582', () => {
      it('applies helper079 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0582 label="Generated 0582" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0582' }));

        expect(onApply).toHaveBeenCalledWith(helper079('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0582 label="Generated 0582" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0582' })).toBeDisabled();
      });
    });
