import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0656 } from './Component0656';
    import { helper073 } from '../../helpers/helper073';

    describe('Component0656', () => {
      it('applies helper073 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0656 label="Generated 0656" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0656' }));

        expect(onApply).toHaveBeenCalledWith(helper073('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0656 label="Generated 0656" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0656' })).toBeDisabled();
      });
    });
