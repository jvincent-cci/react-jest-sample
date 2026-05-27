import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0660 } from './Component0660';
    import { helper057 } from '../../helpers/helper057';

    describe('Component0660', () => {
      it('applies helper057 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0660 label="Generated 0660" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0660' }));

        expect(onApply).toHaveBeenCalledWith(helper057('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0660 label="Generated 0660" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0660' })).toBeDisabled();
      });
    });
