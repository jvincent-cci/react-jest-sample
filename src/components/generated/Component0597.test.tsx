import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0597 } from './Component0597';
    import { helper051 } from '../../helpers/helper051';

    describe('Component0597', () => {
      it('applies helper051 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0597 label="Generated 0597" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0597' }));

        expect(onApply).toHaveBeenCalledWith(helper051('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0597 label="Generated 0597" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0597' })).toBeDisabled();
      });
    });
