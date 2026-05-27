import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0265 } from './Component0265';
    import { helper023 } from '../../helpers/helper023';

    describe('Component0265', () => {
      it('applies helper023 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0265 label="Generated 0265" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0265' }));

        expect(onApply).toHaveBeenCalledWith(helper023('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0265 label="Generated 0265" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0265' })).toBeDisabled();
      });
    });
