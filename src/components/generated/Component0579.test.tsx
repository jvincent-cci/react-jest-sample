import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0579 } from './Component0579';
    import { helper051 } from '../../helpers/helper051';

    describe('Component0579', () => {
      it('applies helper051 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0579 label="Generated 0579" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0579' }));

        expect(onApply).toHaveBeenCalledWith(helper051('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0579 label="Generated 0579" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0579' })).toBeDisabled();
      });
    });
