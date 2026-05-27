import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0941 } from './Component0941';
    import { helper026 } from '../../helpers/helper026';

    describe('Component0941', () => {
      it('applies helper026 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0941 label="Generated 0941" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0941' }));

        expect(onApply).toHaveBeenCalledWith(helper026('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0941 label="Generated 0941" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0941' })).toBeDisabled();
      });
    });
