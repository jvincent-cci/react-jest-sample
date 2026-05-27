import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0697 } from './Component0697';
    import { helper034 } from '../../helpers/helper034';

    describe('Component0697', () => {
      it('applies helper034 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0697 label="Generated 0697" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0697' }));

        expect(onApply).toHaveBeenCalledWith(helper034('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0697 label="Generated 0697" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0697' })).toBeDisabled();
      });
    });
