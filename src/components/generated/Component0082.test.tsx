import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0082 } from './Component0082';
    import { helper082 } from '../../helpers/helper082';

    describe('Component0082', () => {
      it('applies helper082 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0082 label="Generated 0082" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0082' }));

        expect(onApply).toHaveBeenCalledWith(helper082('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0082 label="Generated 0082" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0082' })).toBeDisabled();
      });
    });
