import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0718 } from './Component0718';
    import { helper025 } from '../../helpers/helper025';

    describe('Component0718', () => {
      it('applies helper025 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0718 label="Generated 0718" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0718' }));

        expect(onApply).toHaveBeenCalledWith(helper025('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0718 label="Generated 0718" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0718' })).toBeDisabled();
      });
    });
