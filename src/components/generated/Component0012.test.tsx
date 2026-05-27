import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0012 } from './Component0012';
    import { helper050 } from '../../helpers/helper050';

    describe('Component0012', () => {
      it('applies helper050 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0012 label="Generated 0012" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0012' }));

        expect(onApply).toHaveBeenCalledWith(helper050('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0012 label="Generated 0012" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0012' })).toBeDisabled();
      });
    });
