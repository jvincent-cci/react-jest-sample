import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0548 } from './Component0548';
    import { helper100 } from '../../helpers/helper100';

    describe('Component0548', () => {
      it('applies helper100 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0548 label="Generated 0548" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0548' }));

        expect(onApply).toHaveBeenCalledWith(helper100('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0548 label="Generated 0548" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0548' })).toBeDisabled();
      });
    });
