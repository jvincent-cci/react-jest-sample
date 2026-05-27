import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0771 } from './Component0771';
    import { helper099 } from '../../helpers/helper099';

    describe('Component0771', () => {
      it('applies helper099 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0771 label="Generated 0771" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0771' }));

        expect(onApply).toHaveBeenCalledWith(helper099('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0771 label="Generated 0771" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0771' })).toBeDisabled();
      });
    });
