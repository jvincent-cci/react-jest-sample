import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0552 } from './Component0552';
    import { helper062 } from '../../helpers/helper062';

    describe('Component0552', () => {
      it('applies helper062 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0552 label="Generated 0552" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0552' }));

        expect(onApply).toHaveBeenCalledWith(helper062('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0552 label="Generated 0552" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0552' })).toBeDisabled();
      });
    });
