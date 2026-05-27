import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0838 } from './Component0838';
    import { helper019 } from '../../helpers/helper019';

    describe('Component0838', () => {
      it('applies helper019 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0838 label="Generated 0838" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0838' }));

        expect(onApply).toHaveBeenCalledWith(helper019('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0838 label="Generated 0838" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0838' })).toBeDisabled();
      });
    });
