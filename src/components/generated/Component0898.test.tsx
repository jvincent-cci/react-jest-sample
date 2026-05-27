import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0898 } from './Component0898';
    import { helper039 } from '../../helpers/helper039';

    describe('Component0898', () => {
      it('applies helper039 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0898 label="Generated 0898" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0898' }));

        expect(onApply).toHaveBeenCalledWith(helper039('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0898 label="Generated 0898" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0898' })).toBeDisabled();
      });
    });
