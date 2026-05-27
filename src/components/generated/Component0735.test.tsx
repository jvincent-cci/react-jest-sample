import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0735 } from './Component0735';
    import { helper012 } from '../../helpers/helper012';

    describe('Component0735', () => {
      it('applies helper012 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0735 label="Generated 0735" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0735' }));

        expect(onApply).toHaveBeenCalledWith(helper012('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0735 label="Generated 0735" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0735' })).toBeDisabled();
      });
    });
