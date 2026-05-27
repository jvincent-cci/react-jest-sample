import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0030 } from './Component0030';
    import { helper007 } from '../../helpers/helper007';

    describe('Component0030', () => {
      it('applies helper007 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0030 label="Generated 0030" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0030' }));

        expect(onApply).toHaveBeenCalledWith(helper007('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0030 label="Generated 0030" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0030' })).toBeDisabled();
      });
    });
