import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0376 } from './Component0376';
    import { helper023 } from '../../helpers/helper023';

    describe('Component0376', () => {
      it('applies helper023 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0376 label="Generated 0376" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0376' }));

        expect(onApply).toHaveBeenCalledWith(helper023('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0376 label="Generated 0376" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0376' })).toBeDisabled();
      });
    });
