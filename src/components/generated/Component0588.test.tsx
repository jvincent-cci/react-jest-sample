import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0588 } from './Component0588';
    import { helper063 } from '../../helpers/helper063';

    describe('Component0588', () => {
      it('applies helper063 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0588 label="Generated 0588" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0588' }));

        expect(onApply).toHaveBeenCalledWith(helper063('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0588 label="Generated 0588" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0588' })).toBeDisabled();
      });
    });
