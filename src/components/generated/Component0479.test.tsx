import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0479 } from './Component0479';
    import { helper032 } from '../../helpers/helper032';

    describe('Component0479', () => {
      it('applies helper032 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0479 label="Generated 0479" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0479' }));

        expect(onApply).toHaveBeenCalledWith(helper032('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0479 label="Generated 0479" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0479' })).toBeDisabled();
      });
    });
