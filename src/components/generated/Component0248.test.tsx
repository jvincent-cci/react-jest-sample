import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0248 } from './Component0248';
    import { helper094 } from '../../helpers/helper094';

    describe('Component0248', () => {
      it('applies helper094 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0248 label="Generated 0248" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0248' }));

        expect(onApply).toHaveBeenCalledWith(helper094('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0248 label="Generated 0248" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0248' })).toBeDisabled();
      });
    });
