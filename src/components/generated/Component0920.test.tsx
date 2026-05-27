import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0920 } from './Component0920';
    import { helper094 } from '../../helpers/helper094';

    describe('Component0920', () => {
      it('applies helper094 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0920 label="Generated 0920" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0920' }));

        expect(onApply).toHaveBeenCalledWith(helper094('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0920 label="Generated 0920" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0920' })).toBeDisabled();
      });
    });
