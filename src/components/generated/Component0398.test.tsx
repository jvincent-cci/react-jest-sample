import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0398 } from './Component0398';
    import { helper006 } from '../../helpers/helper006';

    describe('Component0398', () => {
      it('applies helper006 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0398 label="Generated 0398" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0398' }));

        expect(onApply).toHaveBeenCalledWith(helper006('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0398 label="Generated 0398" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0398' })).toBeDisabled();
      });
    });
