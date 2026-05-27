import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0649 } from './Component0649';
    import { helper026 } from '../../helpers/helper026';

    describe('Component0649', () => {
      it('applies helper026 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0649 label="Generated 0649" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0649' }));

        expect(onApply).toHaveBeenCalledWith(helper026('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0649 label="Generated 0649" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0649' })).toBeDisabled();
      });
    });
