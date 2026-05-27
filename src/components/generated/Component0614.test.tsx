import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0614 } from './Component0614';
    import { helper003 } from '../../helpers/helper003';

    describe('Component0614', () => {
      it('applies helper003 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0614 label="Generated 0614" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0614' }));

        expect(onApply).toHaveBeenCalledWith(helper003('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0614 label="Generated 0614" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0614' })).toBeDisabled();
      });
    });
