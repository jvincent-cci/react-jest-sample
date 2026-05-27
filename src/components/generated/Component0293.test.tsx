import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0293 } from './Component0293';
    import { helper079 } from '../../helpers/helper079';

    describe('Component0293', () => {
      it('applies helper079 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0293 label="Generated 0293" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0293' }));

        expect(onApply).toHaveBeenCalledWith(helper079('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0293 label="Generated 0293" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0293' })).toBeDisabled();
      });
    });
