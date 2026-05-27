import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0652 } from './Component0652';
    import { helper033 } from '../../helpers/helper033';

    describe('Component0652', () => {
      it('applies helper033 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0652 label="Generated 0652" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0652' }));

        expect(onApply).toHaveBeenCalledWith(helper033('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0652 label="Generated 0652" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0652' })).toBeDisabled();
      });
    });
