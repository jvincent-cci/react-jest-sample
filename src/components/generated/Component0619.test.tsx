import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0619 } from './Component0619';
    import { helper019 } from '../../helpers/helper019';

    describe('Component0619', () => {
      it('applies helper019 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0619 label="Generated 0619" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0619' }));

        expect(onApply).toHaveBeenCalledWith(helper019('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0619 label="Generated 0619" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0619' })).toBeDisabled();
      });
    });
