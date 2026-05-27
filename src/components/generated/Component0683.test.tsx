import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0683 } from './Component0683';
    import { helper099 } from '../../helpers/helper099';

    describe('Component0683', () => {
      it('applies helper099 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0683 label="Generated 0683" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0683' }));

        expect(onApply).toHaveBeenCalledWith(helper099('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0683 label="Generated 0683" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0683' })).toBeDisabled();
      });
    });
