import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0330 } from './Component0330';
    import { helper100 } from '../../helpers/helper100';

    describe('Component0330', () => {
      it('applies helper100 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0330 label="Generated 0330" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0330' }));

        expect(onApply).toHaveBeenCalledWith(helper100('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0330 label="Generated 0330" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0330' })).toBeDisabled();
      });
    });
