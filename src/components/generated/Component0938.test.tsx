import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0938 } from './Component0938';
    import { helper023 } from '../../helpers/helper023';

    describe('Component0938', () => {
      it('applies helper023 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0938 label="Generated 0938" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0938' }));

        expect(onApply).toHaveBeenCalledWith(helper023('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0938 label="Generated 0938" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0938' })).toBeDisabled();
      });
    });
