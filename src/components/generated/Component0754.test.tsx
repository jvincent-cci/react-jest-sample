import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0754 } from './Component0754';
    import { helper051 } from '../../helpers/helper051';

    describe('Component0754', () => {
      it('applies helper051 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0754 label="Generated 0754" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0754' }));

        expect(onApply).toHaveBeenCalledWith(helper051('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0754 label="Generated 0754" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0754' })).toBeDisabled();
      });
    });
