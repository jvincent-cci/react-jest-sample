import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0617 } from './Component0617';
    import { helper026 } from '../../helpers/helper026';

    describe('Component0617', () => {
      it('applies helper026 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0617 label="Generated 0617" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0617' }));

        expect(onApply).toHaveBeenCalledWith(helper026('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0617 label="Generated 0617" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0617' })).toBeDisabled();
      });
    });
