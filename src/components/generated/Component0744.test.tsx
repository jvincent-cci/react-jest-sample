import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0744 } from './Component0744';
    import { helper099 } from '../../helpers/helper099';

    describe('Component0744', () => {
      it('applies helper099 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0744 label="Generated 0744" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0744' }));

        expect(onApply).toHaveBeenCalledWith(helper099('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0744 label="Generated 0744" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0744' })).toBeDisabled();
      });
    });
