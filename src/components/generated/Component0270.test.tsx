import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0270 } from './Component0270';
    import { helper040 } from '../../helpers/helper040';

    describe('Component0270', () => {
      it('applies helper040 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0270 label="Generated 0270" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0270' }));

        expect(onApply).toHaveBeenCalledWith(helper040('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0270 label="Generated 0270" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0270' })).toBeDisabled();
      });
    });
