import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0231 } from './Component0231';
    import { helper012 } from '../../helpers/helper012';

    describe('Component0231', () => {
      it('applies helper012 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0231 label="Generated 0231" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0231' }));

        expect(onApply).toHaveBeenCalledWith(helper012('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0231 label="Generated 0231" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0231' })).toBeDisabled();
      });
    });
