import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0919 } from './Component0919';
    import { helper042 } from '../../helpers/helper042';

    describe('Component0919', () => {
      it('applies helper042 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0919 label="Generated 0919" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0919' }));

        expect(onApply).toHaveBeenCalledWith(helper042('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0919 label="Generated 0919" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0919' })).toBeDisabled();
      });
    });
