import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0895 } from './Component0895';
    import { helper056 } from '../../helpers/helper056';

    describe('Component0895', () => {
      it('applies helper056 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0895 label="Generated 0895" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0895' }));

        expect(onApply).toHaveBeenCalledWith(helper056('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0895 label="Generated 0895" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0895' })).toBeDisabled();
      });
    });
