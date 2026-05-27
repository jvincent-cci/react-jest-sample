import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0929 } from './Component0929';
    import { helper003 } from '../../helpers/helper003';

    describe('Component0929', () => {
      it('applies helper003 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0929 label="Generated 0929" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0929' }));

        expect(onApply).toHaveBeenCalledWith(helper003('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0929 label="Generated 0929" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0929' })).toBeDisabled();
      });
    });
