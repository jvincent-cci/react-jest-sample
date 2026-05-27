import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0224 } from './Component0224';
    import { helper006 } from '../../helpers/helper006';

    describe('Component0224', () => {
      it('applies helper006 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0224 label="Generated 0224" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0224' }));

        expect(onApply).toHaveBeenCalledWith(helper006('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0224 label="Generated 0224" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0224' })).toBeDisabled();
      });
    });
