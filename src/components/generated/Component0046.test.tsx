import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0046 } from './Component0046';
    import { helper013 } from '../../helpers/helper013';

    describe('Component0046', () => {
      it('applies helper013 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0046 label="Generated 0046" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0046' }));

        expect(onApply).toHaveBeenCalledWith(helper013('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0046 label="Generated 0046" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0046' })).toBeDisabled();
      });
    });
