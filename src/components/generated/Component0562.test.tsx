import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0562 } from './Component0562';
    import { helper078 } from '../../helpers/helper078';

    describe('Component0562', () => {
      it('applies helper078 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0562 label="Generated 0562" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0562' }));

        expect(onApply).toHaveBeenCalledWith(helper078('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0562 label="Generated 0562" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0562' })).toBeDisabled();
      });
    });
