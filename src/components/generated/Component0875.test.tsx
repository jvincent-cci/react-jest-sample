import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0875 } from './Component0875';
    import { helper055 } from '../../helpers/helper055';

    describe('Component0875', () => {
      it('applies helper055 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0875 label="Generated 0875" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0875' }));

        expect(onApply).toHaveBeenCalledWith(helper055('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0875 label="Generated 0875" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0875' })).toBeDisabled();
      });
    });
