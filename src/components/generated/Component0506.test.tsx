import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0506 } from './Component0506';
    import { helper030 } from '../../helpers/helper030';

    describe('Component0506', () => {
      it('applies helper030 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0506 label="Generated 0506" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0506' }));

        expect(onApply).toHaveBeenCalledWith(helper030('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0506 label="Generated 0506" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0506' })).toBeDisabled();
      });
    });
