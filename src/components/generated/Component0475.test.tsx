import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0475 } from './Component0475';
    import { helper062 } from '../../helpers/helper062';

    describe('Component0475', () => {
      it('applies helper062 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0475 label="Generated 0475" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0475' }));

        expect(onApply).toHaveBeenCalledWith(helper062('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0475 label="Generated 0475" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0475' })).toBeDisabled();
      });
    });
