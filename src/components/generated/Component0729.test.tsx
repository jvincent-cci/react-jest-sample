import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0729 } from './Component0729';
    import { helper067 } from '../../helpers/helper067';

    describe('Component0729', () => {
      it('applies helper067 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0729 label="Generated 0729" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0729' }));

        expect(onApply).toHaveBeenCalledWith(helper067('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0729 label="Generated 0729" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0729' })).toBeDisabled();
      });
    });
