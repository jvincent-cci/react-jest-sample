import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0004 } from './Component0004';
    import { helper023 } from '../../helpers/helper023';

    describe('Component0004', () => {
      it('applies helper023 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0004 label="Generated 0004" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0004' }));

        expect(onApply).toHaveBeenCalledWith(helper023('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0004 label="Generated 0004" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0004' })).toBeDisabled();
      });
    });
