import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0508 } from './Component0508';
    import { helper040 } from '../../helpers/helper040';

    describe('Component0508', () => {
      it('applies helper040 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0508 label="Generated 0508" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0508' }));

        expect(onApply).toHaveBeenCalledWith(helper040('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0508 label="Generated 0508" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0508' })).toBeDisabled();
      });
    });
