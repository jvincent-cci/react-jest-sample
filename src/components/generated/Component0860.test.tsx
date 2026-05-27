import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0860 } from './Component0860';
    import { helper091 } from '../../helpers/helper091';

    describe('Component0860', () => {
      it('applies helper091 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0860 label="Generated 0860" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0860' }));

        expect(onApply).toHaveBeenCalledWith(helper091('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0860 label="Generated 0860" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0860' })).toBeDisabled();
      });
    });
