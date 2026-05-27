import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0621 } from './Component0621';
    import { helper006 } from '../../helpers/helper006';

    describe('Component0621', () => {
      it('applies helper006 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0621 label="Generated 0621" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0621' }));

        expect(onApply).toHaveBeenCalledWith(helper006('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0621 label="Generated 0621" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0621' })).toBeDisabled();
      });
    });
