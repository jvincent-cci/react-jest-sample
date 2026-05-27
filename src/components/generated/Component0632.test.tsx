import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0632 } from './Component0632';
    import { helper046 } from '../../helpers/helper046';

    describe('Component0632', () => {
      it('applies helper046 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0632 label="Generated 0632" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0632' }));

        expect(onApply).toHaveBeenCalledWith(helper046('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0632 label="Generated 0632" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0632' })).toBeDisabled();
      });
    });
