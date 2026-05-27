import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0229 } from './Component0229';
    import { helper068 } from '../../helpers/helper068';

    describe('Component0229', () => {
      it('applies helper068 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0229 label="Generated 0229" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0229' }));

        expect(onApply).toHaveBeenCalledWith(helper068('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0229 label="Generated 0229" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0229' })).toBeDisabled();
      });
    });
