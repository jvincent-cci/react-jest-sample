import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0857 } from './Component0857';
    import { helper044 } from '../../helpers/helper044';

    describe('Component0857', () => {
      it('applies helper044 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0857 label="Generated 0857" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0857' }));

        expect(onApply).toHaveBeenCalledWith(helper044('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0857 label="Generated 0857" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0857' })).toBeDisabled();
      });
    });
