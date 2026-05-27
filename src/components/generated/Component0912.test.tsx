import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0912 } from './Component0912';
    import { helper042 } from '../../helpers/helper042';

    describe('Component0912', () => {
      it('applies helper042 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0912 label="Generated 0912" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0912' }));

        expect(onApply).toHaveBeenCalledWith(helper042('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0912 label="Generated 0912" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0912' })).toBeDisabled();
      });
    });
