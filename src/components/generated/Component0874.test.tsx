import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0874 } from './Component0874';
    import { helper094 } from '../../helpers/helper094';

    describe('Component0874', () => {
      it('applies helper094 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0874 label="Generated 0874" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0874' }));

        expect(onApply).toHaveBeenCalledWith(helper094('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0874 label="Generated 0874" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0874' })).toBeDisabled();
      });
    });
