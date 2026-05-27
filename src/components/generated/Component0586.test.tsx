import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0586 } from './Component0586';
    import { helper016 } from '../../helpers/helper016';

    describe('Component0586', () => {
      it('applies helper016 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0586 label="Generated 0586" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0586' }));

        expect(onApply).toHaveBeenCalledWith(helper016('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0586 label="Generated 0586" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0586' })).toBeDisabled();
      });
    });
