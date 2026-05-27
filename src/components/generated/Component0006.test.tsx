import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0006 } from './Component0006';
    import { helper003 } from '../../helpers/helper003';

    describe('Component0006', () => {
      it('applies helper003 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0006 label="Generated 0006" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0006' }));

        expect(onApply).toHaveBeenCalledWith(helper003('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0006 label="Generated 0006" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0006' })).toBeDisabled();
      });
    });
