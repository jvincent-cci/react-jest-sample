import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0466 } from './Component0466';
    import { helper078 } from '../../helpers/helper078';

    describe('Component0466', () => {
      it('applies helper078 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0466 label="Generated 0466" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0466' }));

        expect(onApply).toHaveBeenCalledWith(helper078('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0466 label="Generated 0466" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0466' })).toBeDisabled();
      });
    });
