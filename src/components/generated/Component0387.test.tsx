import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0387 } from './Component0387';
    import { helper018 } from '../../helpers/helper018';

    describe('Component0387', () => {
      it('applies helper018 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0387 label="Generated 0387" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0387' }));

        expect(onApply).toHaveBeenCalledWith(helper018('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0387 label="Generated 0387" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0387' })).toBeDisabled();
      });
    });
