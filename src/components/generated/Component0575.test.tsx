import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0575 } from './Component0575';
    import { helper033 } from '../../helpers/helper033';

    describe('Component0575', () => {
      it('applies helper033 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0575 label="Generated 0575" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0575' }));

        expect(onApply).toHaveBeenCalledWith(helper033('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0575 label="Generated 0575" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0575' })).toBeDisabled();
      });
    });
