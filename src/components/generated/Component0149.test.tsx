import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0149 } from './Component0149';
    import { helper047 } from '../../helpers/helper047';

    describe('Component0149', () => {
      it('applies helper047 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0149 label="Generated 0149" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0149' }));

        expect(onApply).toHaveBeenCalledWith(helper047('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0149 label="Generated 0149" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0149' })).toBeDisabled();
      });
    });
