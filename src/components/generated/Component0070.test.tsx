import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0070 } from './Component0070';
    import { helper031 } from '../../helpers/helper031';

    describe('Component0070', () => {
      it('applies helper031 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0070 label="Generated 0070" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0070' }));

        expect(onApply).toHaveBeenCalledWith(helper031('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0070 label="Generated 0070" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0070' })).toBeDisabled();
      });
    });
