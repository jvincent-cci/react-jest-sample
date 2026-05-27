import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0502 } from './Component0502';
    import { helper056 } from '../../helpers/helper056';

    describe('Component0502', () => {
      it('applies helper056 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0502 label="Generated 0502" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0502' }));

        expect(onApply).toHaveBeenCalledWith(helper056('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0502 label="Generated 0502" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0502' })).toBeDisabled();
      });
    });
