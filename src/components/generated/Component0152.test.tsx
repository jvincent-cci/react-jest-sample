import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0152 } from './Component0152';
    import { helper051 } from '../../helpers/helper051';

    describe('Component0152', () => {
      it('applies helper051 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0152 label="Generated 0152" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0152' }));

        expect(onApply).toHaveBeenCalledWith(helper051('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0152 label="Generated 0152" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0152' })).toBeDisabled();
      });
    });
