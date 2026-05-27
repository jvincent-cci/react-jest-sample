import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0846 } from './Component0846';
    import { helper049 } from '../../helpers/helper049';

    describe('Component0846', () => {
      it('applies helper049 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0846 label="Generated 0846" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0846' }));

        expect(onApply).toHaveBeenCalledWith(helper049('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0846 label="Generated 0846" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0846' })).toBeDisabled();
      });
    });
