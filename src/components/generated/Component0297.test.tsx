import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0297 } from './Component0297';
    import { helper070 } from '../../helpers/helper070';

    describe('Component0297', () => {
      it('applies helper070 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0297 label="Generated 0297" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0297' }));

        expect(onApply).toHaveBeenCalledWith(helper070('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0297 label="Generated 0297" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0297' })).toBeDisabled();
      });
    });
