import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0858 } from './Component0858';
    import { helper095 } from '../../helpers/helper095';

    describe('Component0858', () => {
      it('applies helper095 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0858 label="Generated 0858" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0858' }));

        expect(onApply).toHaveBeenCalledWith(helper095('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0858 label="Generated 0858" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0858' })).toBeDisabled();
      });
    });
