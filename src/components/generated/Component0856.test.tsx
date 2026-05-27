import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0856 } from './Component0856';
    import { helper051 } from '../../helpers/helper051';

    describe('Component0856', () => {
      it('applies helper051 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0856 label="Generated 0856" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0856' }));

        expect(onApply).toHaveBeenCalledWith(helper051('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0856 label="Generated 0856" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0856' })).toBeDisabled();
      });
    });
