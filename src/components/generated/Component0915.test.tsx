import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0915 } from './Component0915';
    import { helper062 } from '../../helpers/helper062';

    describe('Component0915', () => {
      it('applies helper062 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0915 label="Generated 0915" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0915' }));

        expect(onApply).toHaveBeenCalledWith(helper062('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0915 label="Generated 0915" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0915' })).toBeDisabled();
      });
    });
