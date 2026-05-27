import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0430 } from './Component0430';
    import { helper091 } from '../../helpers/helper091';

    describe('Component0430', () => {
      it('applies helper091 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0430 label="Generated 0430" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0430' }));

        expect(onApply).toHaveBeenCalledWith(helper091('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0430 label="Generated 0430" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0430' })).toBeDisabled();
      });
    });
