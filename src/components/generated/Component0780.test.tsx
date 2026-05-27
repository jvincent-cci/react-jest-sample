import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0780 } from './Component0780';
    import { helper062 } from '../../helpers/helper062';

    describe('Component0780', () => {
      it('applies helper062 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0780 label="Generated 0780" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0780' }));

        expect(onApply).toHaveBeenCalledWith(helper062('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0780 label="Generated 0780" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0780' })).toBeDisabled();
      });
    });
