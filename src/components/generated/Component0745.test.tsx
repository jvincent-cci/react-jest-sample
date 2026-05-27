import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0745 } from './Component0745';
    import { helper040 } from '../../helpers/helper040';

    describe('Component0745', () => {
      it('applies helper040 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0745 label="Generated 0745" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0745' }));

        expect(onApply).toHaveBeenCalledWith(helper040('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0745 label="Generated 0745" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0745' })).toBeDisabled();
      });
    });
