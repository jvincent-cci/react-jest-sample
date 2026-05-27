import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0075 } from './Component0075';
    import { helper061 } from '../../helpers/helper061';

    describe('Component0075', () => {
      it('applies helper061 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0075 label="Generated 0075" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0075' }));

        expect(onApply).toHaveBeenCalledWith(helper061('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0075 label="Generated 0075" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0075' })).toBeDisabled();
      });
    });
