import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0637 } from './Component0637';
    import { helper033 } from '../../helpers/helper033';

    describe('Component0637', () => {
      it('applies helper033 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0637 label="Generated 0637" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0637' }));

        expect(onApply).toHaveBeenCalledWith(helper033('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0637 label="Generated 0637" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0637' })).toBeDisabled();
      });
    });
