import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0357 } from './Component0357';
    import { helper055 } from '../../helpers/helper055';

    describe('Component0357', () => {
      it('applies helper055 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0357 label="Generated 0357" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0357' }));

        expect(onApply).toHaveBeenCalledWith(helper055('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0357 label="Generated 0357" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0357' })).toBeDisabled();
      });
    });
