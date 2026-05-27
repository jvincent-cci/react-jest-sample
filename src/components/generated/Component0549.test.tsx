import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0549 } from './Component0549';
    import { helper032 } from '../../helpers/helper032';

    describe('Component0549', () => {
      it('applies helper032 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0549 label="Generated 0549" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0549' }));

        expect(onApply).toHaveBeenCalledWith(helper032('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0549 label="Generated 0549" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0549' })).toBeDisabled();
      });
    });
