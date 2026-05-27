import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0885 } from './Component0885';
    import { helper073 } from '../../helpers/helper073';

    describe('Component0885', () => {
      it('applies helper073 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0885 label="Generated 0885" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0885' }));

        expect(onApply).toHaveBeenCalledWith(helper073('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0885 label="Generated 0885" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0885' })).toBeDisabled();
      });
    });
