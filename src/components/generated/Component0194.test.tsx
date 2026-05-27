import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0194 } from './Component0194';
    import { helper075 } from '../../helpers/helper075';

    describe('Component0194', () => {
      it('applies helper075 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0194 label="Generated 0194" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0194' }));

        expect(onApply).toHaveBeenCalledWith(helper075('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0194 label="Generated 0194" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0194' })).toBeDisabled();
      });
    });
