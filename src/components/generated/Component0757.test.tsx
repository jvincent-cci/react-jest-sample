import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0757 } from './Component0757';
    import { helper033 } from '../../helpers/helper033';

    describe('Component0757', () => {
      it('applies helper033 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0757 label="Generated 0757" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0757' }));

        expect(onApply).toHaveBeenCalledWith(helper033('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0757 label="Generated 0757" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0757' })).toBeDisabled();
      });
    });
