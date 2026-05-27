import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0476 } from './Component0476';
    import { helper059 } from '../../helpers/helper059';

    describe('Component0476', () => {
      it('applies helper059 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0476 label="Generated 0476" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0476' }));

        expect(onApply).toHaveBeenCalledWith(helper059('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0476 label="Generated 0476" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0476' })).toBeDisabled();
      });
    });
