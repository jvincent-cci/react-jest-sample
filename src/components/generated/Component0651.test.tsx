import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0651 } from './Component0651';
    import { helper062 } from '../../helpers/helper062';

    describe('Component0651', () => {
      it('applies helper062 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0651 label="Generated 0651" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0651' }));

        expect(onApply).toHaveBeenCalledWith(helper062('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0651 label="Generated 0651" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0651' })).toBeDisabled();
      });
    });
