import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0191 } from './Component0191';
    import { helper089 } from '../../helpers/helper089';

    describe('Component0191', () => {
      it('applies helper089 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0191 label="Generated 0191" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0191' }));

        expect(onApply).toHaveBeenCalledWith(helper089('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0191 label="Generated 0191" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0191' })).toBeDisabled();
      });
    });
