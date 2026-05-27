import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0400 } from './Component0400';
    import { helper020 } from '../../helpers/helper020';

    describe('Component0400', () => {
      it('applies helper020 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0400 label="Generated 0400" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0400' }));

        expect(onApply).toHaveBeenCalledWith(helper020('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0400 label="Generated 0400" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0400' })).toBeDisabled();
      });
    });
