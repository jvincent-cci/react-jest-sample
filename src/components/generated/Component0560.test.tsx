import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0560 } from './Component0560';
    import { helper084 } from '../../helpers/helper084';

    describe('Component0560', () => {
      it('applies helper084 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0560 label="Generated 0560" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0560' }));

        expect(onApply).toHaveBeenCalledWith(helper084('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0560 label="Generated 0560" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0560' })).toBeDisabled();
      });
    });
