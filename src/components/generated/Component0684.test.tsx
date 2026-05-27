import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0684 } from './Component0684';
    import { helper056 } from '../../helpers/helper056';

    describe('Component0684', () => {
      it('applies helper056 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0684 label="Generated 0684" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0684' }));

        expect(onApply).toHaveBeenCalledWith(helper056('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0684 label="Generated 0684" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0684' })).toBeDisabled();
      });
    });
