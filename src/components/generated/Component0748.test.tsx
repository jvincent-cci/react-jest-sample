import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0748 } from './Component0748';
    import { helper030 } from '../../helpers/helper030';

    describe('Component0748', () => {
      it('applies helper030 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0748 label="Generated 0748" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0748' }));

        expect(onApply).toHaveBeenCalledWith(helper030('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0748 label="Generated 0748" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0748' })).toBeDisabled();
      });
    });
