import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0537 } from './Component0537';
    import { helper023 } from '../../helpers/helper023';

    describe('Component0537', () => {
      it('applies helper023 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0537 label="Generated 0537" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0537' }));

        expect(onApply).toHaveBeenCalledWith(helper023('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0537 label="Generated 0537" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0537' })).toBeDisabled();
      });
    });
