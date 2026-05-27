import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0599 } from './Component0599';
    import { helper049 } from '../../helpers/helper049';

    describe('Component0599', () => {
      it('applies helper049 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0599 label="Generated 0599" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0599' }));

        expect(onApply).toHaveBeenCalledWith(helper049('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0599 label="Generated 0599" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0599' })).toBeDisabled();
      });
    });
