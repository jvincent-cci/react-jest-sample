import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0536 } from './Component0536';
    import { helper091 } from '../../helpers/helper091';

    describe('Component0536', () => {
      it('applies helper091 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0536 label="Generated 0536" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0536' }));

        expect(onApply).toHaveBeenCalledWith(helper091('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0536 label="Generated 0536" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0536' })).toBeDisabled();
      });
    });
