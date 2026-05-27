import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0324 } from './Component0324';
    import { helper059 } from '../../helpers/helper059';

    describe('Component0324', () => {
      it('applies helper059 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0324 label="Generated 0324" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0324' }));

        expect(onApply).toHaveBeenCalledWith(helper059('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0324 label="Generated 0324" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0324' })).toBeDisabled();
      });
    });
