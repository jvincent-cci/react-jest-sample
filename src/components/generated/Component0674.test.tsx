import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0674 } from './Component0674';
    import { helper049 } from '../../helpers/helper049';

    describe('Component0674', () => {
      it('applies helper049 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0674 label="Generated 0674" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0674' }));

        expect(onApply).toHaveBeenCalledWith(helper049('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0674 label="Generated 0674" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0674' })).toBeDisabled();
      });
    });
