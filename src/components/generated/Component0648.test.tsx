import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0648 } from './Component0648';
    import { helper095 } from '../../helpers/helper095';

    describe('Component0648', () => {
      it('applies helper095 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0648 label="Generated 0648" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0648' }));

        expect(onApply).toHaveBeenCalledWith(helper095('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0648 label="Generated 0648" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0648' })).toBeDisabled();
      });
    });
