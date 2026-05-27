import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0762 } from './Component0762';
    import { helper070 } from '../../helpers/helper070';

    describe('Component0762', () => {
      it('applies helper070 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0762 label="Generated 0762" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0762' }));

        expect(onApply).toHaveBeenCalledWith(helper070('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0762 label="Generated 0762" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0762' })).toBeDisabled();
      });
    });
