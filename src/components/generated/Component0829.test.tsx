import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0829 } from './Component0829';
    import { helper049 } from '../../helpers/helper049';

    describe('Component0829', () => {
      it('applies helper049 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0829 label="Generated 0829" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0829' }));

        expect(onApply).toHaveBeenCalledWith(helper049('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0829 label="Generated 0829" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0829' })).toBeDisabled();
      });
    });
