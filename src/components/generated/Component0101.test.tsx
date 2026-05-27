import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0101 } from './Component0101';
    import { helper029 } from '../../helpers/helper029';

    describe('Component0101', () => {
      it('applies helper029 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0101 label="Generated 0101" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0101' }));

        expect(onApply).toHaveBeenCalledWith(helper029('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0101 label="Generated 0101" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0101' })).toBeDisabled();
      });
    });
