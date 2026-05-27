import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0796 } from './Component0796';
    import { helper088 } from '../../helpers/helper088';

    describe('Component0796', () => {
      it('applies helper088 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0796 label="Generated 0796" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0796' }));

        expect(onApply).toHaveBeenCalledWith(helper088('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0796 label="Generated 0796" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0796' })).toBeDisabled();
      });
    });
