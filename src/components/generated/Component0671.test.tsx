import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0671 } from './Component0671';
    import { helper084 } from '../../helpers/helper084';

    describe('Component0671', () => {
      it('applies helper084 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0671 label="Generated 0671" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0671' }));

        expect(onApply).toHaveBeenCalledWith(helper084('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0671 label="Generated 0671" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0671' })).toBeDisabled();
      });
    });
