import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0867 } from './Component0867';
    import { helper052 } from '../../helpers/helper052';

    describe('Component0867', () => {
      it('applies helper052 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0867 label="Generated 0867" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0867' }));

        expect(onApply).toHaveBeenCalledWith(helper052('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0867 label="Generated 0867" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0867' })).toBeDisabled();
      });
    });
