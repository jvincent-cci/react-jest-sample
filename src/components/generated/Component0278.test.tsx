import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0278 } from './Component0278';
    import { helper037 } from '../../helpers/helper037';

    describe('Component0278', () => {
      it('applies helper037 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0278 label="Generated 0278" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0278' }));

        expect(onApply).toHaveBeenCalledWith(helper037('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0278 label="Generated 0278" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0278' })).toBeDisabled();
      });
    });
