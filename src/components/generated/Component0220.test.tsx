import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0220 } from './Component0220';
    import { helper052 } from '../../helpers/helper052';

    describe('Component0220', () => {
      it('applies helper052 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0220 label="Generated 0220" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0220' }));

        expect(onApply).toHaveBeenCalledWith(helper052('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0220 label="Generated 0220" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0220' })).toBeDisabled();
      });
    });
