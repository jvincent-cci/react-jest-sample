import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0975 } from './Component0975';
    import { helper091 } from '../../helpers/helper091';

    describe('Component0975', () => {
      it('applies helper091 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0975 label="Generated 0975" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0975' }));

        expect(onApply).toHaveBeenCalledWith(helper091('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0975 label="Generated 0975" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0975' })).toBeDisabled();
      });
    });
