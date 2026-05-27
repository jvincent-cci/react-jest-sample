import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0624 } from './Component0624';
    import { helper019 } from '../../helpers/helper019';

    describe('Component0624', () => {
      it('applies helper019 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0624 label="Generated 0624" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0624' }));

        expect(onApply).toHaveBeenCalledWith(helper019('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0624 label="Generated 0624" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0624' })).toBeDisabled();
      });
    });
