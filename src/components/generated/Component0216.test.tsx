import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0216 } from './Component0216';
    import { helper080 } from '../../helpers/helper080';

    describe('Component0216', () => {
      it('applies helper080 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0216 label="Generated 0216" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0216' }));

        expect(onApply).toHaveBeenCalledWith(helper080('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0216 label="Generated 0216" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0216' })).toBeDisabled();
      });
    });
