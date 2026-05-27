import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0247 } from './Component0247';
    import { helper068 } from '../../helpers/helper068';

    describe('Component0247', () => {
      it('applies helper068 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0247 label="Generated 0247" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0247' }));

        expect(onApply).toHaveBeenCalledWith(helper068('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0247 label="Generated 0247" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0247' })).toBeDisabled();
      });
    });
