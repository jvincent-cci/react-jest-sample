import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0093 } from './Component0093';
    import { helper044 } from '../../helpers/helper044';

    describe('Component0093', () => {
      it('applies helper044 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0093 label="Generated 0093" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0093' }));

        expect(onApply).toHaveBeenCalledWith(helper044('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0093 label="Generated 0093" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0093' })).toBeDisabled();
      });
    });
