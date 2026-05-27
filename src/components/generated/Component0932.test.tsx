import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0932 } from './Component0932';
    import { helper091 } from '../../helpers/helper091';

    describe('Component0932', () => {
      it('applies helper091 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0932 label="Generated 0932" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0932' }));

        expect(onApply).toHaveBeenCalledWith(helper091('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0932 label="Generated 0932" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0932' })).toBeDisabled();
      });
    });
