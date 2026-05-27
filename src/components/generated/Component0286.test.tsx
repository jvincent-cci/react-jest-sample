import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0286 } from './Component0286';
    import { helper019 } from '../../helpers/helper019';

    describe('Component0286', () => {
      it('applies helper019 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0286 label="Generated 0286" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0286' }));

        expect(onApply).toHaveBeenCalledWith(helper019('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0286 label="Generated 0286" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0286' })).toBeDisabled();
      });
    });
