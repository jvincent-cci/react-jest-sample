import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0974 } from './Component0974';
    import { helper054 } from '../../helpers/helper054';

    describe('Component0974', () => {
      it('applies helper054 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0974 label="Generated 0974" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0974' }));

        expect(onApply).toHaveBeenCalledWith(helper054('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0974 label="Generated 0974" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0974' })).toBeDisabled();
      });
    });
