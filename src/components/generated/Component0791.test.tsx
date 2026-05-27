import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0791 } from './Component0791';
    import { helper016 } from '../../helpers/helper016';

    describe('Component0791', () => {
      it('applies helper016 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0791 label="Generated 0791" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0791' }));

        expect(onApply).toHaveBeenCalledWith(helper016('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0791 label="Generated 0791" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0791' })).toBeDisabled();
      });
    });
