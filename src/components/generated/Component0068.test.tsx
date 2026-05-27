import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0068 } from './Component0068';
    import { helper044 } from '../../helpers/helper044';

    describe('Component0068', () => {
      it('applies helper044 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0068 label="Generated 0068" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0068' }));

        expect(onApply).toHaveBeenCalledWith(helper044('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0068 label="Generated 0068" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0068' })).toBeDisabled();
      });
    });
