import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0288 } from './Component0288';
    import { helper033 } from '../../helpers/helper033';

    describe('Component0288', () => {
      it('applies helper033 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0288 label="Generated 0288" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0288' }));

        expect(onApply).toHaveBeenCalledWith(helper033('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0288 label="Generated 0288" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0288' })).toBeDisabled();
      });
    });
