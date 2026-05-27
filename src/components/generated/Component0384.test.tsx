import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0384 } from './Component0384';
    import { helper100 } from '../../helpers/helper100';

    describe('Component0384', () => {
      it('applies helper100 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0384 label="Generated 0384" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0384' }));

        expect(onApply).toHaveBeenCalledWith(helper100('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0384 label="Generated 0384" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0384' })).toBeDisabled();
      });
    });
