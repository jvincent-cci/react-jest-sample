import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0014 } from './Component0014';
    import { helper087 } from '../../helpers/helper087';

    describe('Component0014', () => {
      it('applies helper087 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0014 label="Generated 0014" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0014' }));

        expect(onApply).toHaveBeenCalledWith(helper087('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0014 label="Generated 0014" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0014' })).toBeDisabled();
      });
    });
