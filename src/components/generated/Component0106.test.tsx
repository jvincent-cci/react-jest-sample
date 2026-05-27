import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0106 } from './Component0106';
    import { helper032 } from '../../helpers/helper032';

    describe('Component0106', () => {
      it('applies helper032 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0106 label="Generated 0106" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0106' }));

        expect(onApply).toHaveBeenCalledWith(helper032('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0106 label="Generated 0106" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0106' })).toBeDisabled();
      });
    });
