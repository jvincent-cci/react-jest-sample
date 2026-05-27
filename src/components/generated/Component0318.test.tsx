import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0318 } from './Component0318';
    import { helper051 } from '../../helpers/helper051';

    describe('Component0318', () => {
      it('applies helper051 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0318 label="Generated 0318" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0318' }));

        expect(onApply).toHaveBeenCalledWith(helper051('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0318 label="Generated 0318" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0318' })).toBeDisabled();
      });
    });
