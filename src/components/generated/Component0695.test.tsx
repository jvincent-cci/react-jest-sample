import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0695 } from './Component0695';
    import { helper045 } from '../../helpers/helper045';

    describe('Component0695', () => {
      it('applies helper045 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0695 label="Generated 0695" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0695' }));

        expect(onApply).toHaveBeenCalledWith(helper045('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0695 label="Generated 0695" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0695' })).toBeDisabled();
      });
    });
