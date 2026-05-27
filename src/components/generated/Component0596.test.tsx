import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0596 } from './Component0596';
    import { helper057 } from '../../helpers/helper057';

    describe('Component0596', () => {
      it('applies helper057 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0596 label="Generated 0596" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0596' }));

        expect(onApply).toHaveBeenCalledWith(helper057('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0596 label="Generated 0596" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0596' })).toBeDisabled();
      });
    });
