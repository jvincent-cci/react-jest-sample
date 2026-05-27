import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0746 } from './Component0746';
    import { helper080 } from '../../helpers/helper080';

    describe('Component0746', () => {
      it('applies helper080 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0746 label="Generated 0746" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0746' }));

        expect(onApply).toHaveBeenCalledWith(helper080('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0746 label="Generated 0746" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0746' })).toBeDisabled();
      });
    });
