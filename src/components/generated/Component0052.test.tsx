import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0052 } from './Component0052';
    import { helper028 } from '../../helpers/helper028';

    describe('Component0052', () => {
      it('applies helper028 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0052 label="Generated 0052" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0052' }));

        expect(onApply).toHaveBeenCalledWith(helper028('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0052 label="Generated 0052" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0052' })).toBeDisabled();
      });
    });
