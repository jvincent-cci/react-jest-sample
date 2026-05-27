import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0166 } from './Component0166';
    import { helper025 } from '../../helpers/helper025';

    describe('Component0166', () => {
      it('applies helper025 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0166 label="Generated 0166" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0166' }));

        expect(onApply).toHaveBeenCalledWith(helper025('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0166 label="Generated 0166" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0166' })).toBeDisabled();
      });
    });
