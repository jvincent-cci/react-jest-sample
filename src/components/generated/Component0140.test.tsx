import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0140 } from './Component0140';
    import { helper034 } from '../../helpers/helper034';

    describe('Component0140', () => {
      it('applies helper034 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0140 label="Generated 0140" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0140' }));

        expect(onApply).toHaveBeenCalledWith(helper034('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0140 label="Generated 0140" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0140' })).toBeDisabled();
      });
    });
