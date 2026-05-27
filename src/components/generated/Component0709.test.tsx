import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0709 } from './Component0709';
    import { helper073 } from '../../helpers/helper073';

    describe('Component0709', () => {
      it('applies helper073 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0709 label="Generated 0709" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0709' }));

        expect(onApply).toHaveBeenCalledWith(helper073('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0709 label="Generated 0709" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0709' })).toBeDisabled();
      });
    });
