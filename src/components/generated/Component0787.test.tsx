import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0787 } from './Component0787';
    import { helper030 } from '../../helpers/helper030';

    describe('Component0787', () => {
      it('applies helper030 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0787 label="Generated 0787" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0787' }));

        expect(onApply).toHaveBeenCalledWith(helper030('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0787 label="Generated 0787" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0787' })).toBeDisabled();
      });
    });
