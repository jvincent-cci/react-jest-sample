import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0550 } from './Component0550';
    import { helper087 } from '../../helpers/helper087';

    describe('Component0550', () => {
      it('applies helper087 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0550 label="Generated 0550" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0550' }));

        expect(onApply).toHaveBeenCalledWith(helper087('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0550 label="Generated 0550" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0550' })).toBeDisabled();
      });
    });
