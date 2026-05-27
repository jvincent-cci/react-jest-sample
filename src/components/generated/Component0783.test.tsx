import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0783 } from './Component0783';
    import { helper030 } from '../../helpers/helper030';

    describe('Component0783', () => {
      it('applies helper030 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0783 label="Generated 0783" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0783' }));

        expect(onApply).toHaveBeenCalledWith(helper030('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0783 label="Generated 0783" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0783' })).toBeDisabled();
      });
    });
