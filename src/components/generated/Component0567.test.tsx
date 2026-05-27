import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0567 } from './Component0567';
    import { helper049 } from '../../helpers/helper049';

    describe('Component0567', () => {
      it('applies helper049 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0567 label="Generated 0567" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0567' }));

        expect(onApply).toHaveBeenCalledWith(helper049('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0567 label="Generated 0567" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0567' })).toBeDisabled();
      });
    });
