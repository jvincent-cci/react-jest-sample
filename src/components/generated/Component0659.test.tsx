import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0659 } from './Component0659';
    import { helper029 } from '../../helpers/helper029';

    describe('Component0659', () => {
      it('applies helper029 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0659 label="Generated 0659" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0659' }));

        expect(onApply).toHaveBeenCalledWith(helper029('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0659 label="Generated 0659" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0659' })).toBeDisabled();
      });
    });
