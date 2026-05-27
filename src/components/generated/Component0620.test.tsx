import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0620 } from './Component0620';
    import { helper032 } from '../../helpers/helper032';

    describe('Component0620', () => {
      it('applies helper032 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0620 label="Generated 0620" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0620' }));

        expect(onApply).toHaveBeenCalledWith(helper032('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0620 label="Generated 0620" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0620' })).toBeDisabled();
      });
    });
