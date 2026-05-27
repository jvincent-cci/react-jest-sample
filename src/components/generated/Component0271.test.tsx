import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0271 } from './Component0271';
    import { helper044 } from '../../helpers/helper044';

    describe('Component0271', () => {
      it('applies helper044 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0271 label="Generated 0271" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0271' }));

        expect(onApply).toHaveBeenCalledWith(helper044('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0271 label="Generated 0271" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0271' })).toBeDisabled();
      });
    });
