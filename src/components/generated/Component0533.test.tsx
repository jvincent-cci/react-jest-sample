import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0533 } from './Component0533';
    import { helper025 } from '../../helpers/helper025';

    describe('Component0533', () => {
      it('applies helper025 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0533 label="Generated 0533" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0533' }));

        expect(onApply).toHaveBeenCalledWith(helper025('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0533 label="Generated 0533" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0533' })).toBeDisabled();
      });
    });
