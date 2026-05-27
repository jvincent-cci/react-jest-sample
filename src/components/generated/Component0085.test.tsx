import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0085 } from './Component0085';
    import { helper041 } from '../../helpers/helper041';

    describe('Component0085', () => {
      it('applies helper041 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0085 label="Generated 0085" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0085' }));

        expect(onApply).toHaveBeenCalledWith(helper041('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0085 label="Generated 0085" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0085' })).toBeDisabled();
      });
    });
