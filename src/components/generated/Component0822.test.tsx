import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0822 } from './Component0822';
    import { helper094 } from '../../helpers/helper094';

    describe('Component0822', () => {
      it('applies helper094 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0822 label="Generated 0822" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0822' }));

        expect(onApply).toHaveBeenCalledWith(helper094('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0822 label="Generated 0822" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0822' })).toBeDisabled();
      });
    });
