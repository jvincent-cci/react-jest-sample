import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0784 } from './Component0784';
    import { helper088 } from '../../helpers/helper088';

    describe('Component0784', () => {
      it('applies helper088 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0784 label="Generated 0784" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0784' }));

        expect(onApply).toHaveBeenCalledWith(helper088('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0784 label="Generated 0784" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0784' })).toBeDisabled();
      });
    });
