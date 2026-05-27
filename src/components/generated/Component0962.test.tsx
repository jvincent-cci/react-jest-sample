import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0962 } from './Component0962';
    import { helper019 } from '../../helpers/helper019';

    describe('Component0962', () => {
      it('applies helper019 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0962 label="Generated 0962" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0962' }));

        expect(onApply).toHaveBeenCalledWith(helper019('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0962 label="Generated 0962" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0962' })).toBeDisabled();
      });
    });
