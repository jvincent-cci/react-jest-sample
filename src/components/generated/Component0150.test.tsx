import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0150 } from './Component0150';
    import { helper026 } from '../../helpers/helper026';

    describe('Component0150', () => {
      it('applies helper026 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0150 label="Generated 0150" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0150' }));

        expect(onApply).toHaveBeenCalledWith(helper026('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0150 label="Generated 0150" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0150' })).toBeDisabled();
      });
    });
