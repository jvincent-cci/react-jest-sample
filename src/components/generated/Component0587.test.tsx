import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0587 } from './Component0587';
    import { helper027 } from '../../helpers/helper027';

    describe('Component0587', () => {
      it('applies helper027 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0587 label="Generated 0587" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0587' }));

        expect(onApply).toHaveBeenCalledWith(helper027('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0587 label="Generated 0587" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0587' })).toBeDisabled();
      });
    });
