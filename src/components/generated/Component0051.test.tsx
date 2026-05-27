import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0051 } from './Component0051';
    import { helper022 } from '../../helpers/helper022';

    describe('Component0051', () => {
      it('applies helper022 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0051 label="Generated 0051" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0051' }));

        expect(onApply).toHaveBeenCalledWith(helper022('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0051 label="Generated 0051" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0051' })).toBeDisabled();
      });
    });
