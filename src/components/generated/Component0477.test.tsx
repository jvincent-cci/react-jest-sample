import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0477 } from './Component0477';
    import { helper091 } from '../../helpers/helper091';

    describe('Component0477', () => {
      it('applies helper091 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0477 label="Generated 0477" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0477' }));

        expect(onApply).toHaveBeenCalledWith(helper091('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0477 label="Generated 0477" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0477' })).toBeDisabled();
      });
    });
