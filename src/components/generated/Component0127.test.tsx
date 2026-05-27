import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0127 } from './Component0127';
    import { helper093 } from '../../helpers/helper093';

    describe('Component0127', () => {
      it('applies helper093 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0127 label="Generated 0127" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0127' }));

        expect(onApply).toHaveBeenCalledWith(helper093('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0127 label="Generated 0127" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0127' })).toBeDisabled();
      });
    });
