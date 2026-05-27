import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0654 } from './Component0654';
    import { helper057 } from '../../helpers/helper057';

    describe('Component0654', () => {
      it('applies helper057 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0654 label="Generated 0654" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0654' }));

        expect(onApply).toHaveBeenCalledWith(helper057('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0654 label="Generated 0654" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0654' })).toBeDisabled();
      });
    });
