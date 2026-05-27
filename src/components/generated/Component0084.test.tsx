import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0084 } from './Component0084';
    import { helper084 } from '../../helpers/helper084';

    describe('Component0084', () => {
      it('applies helper084 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0084 label="Generated 0084" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0084' }));

        expect(onApply).toHaveBeenCalledWith(helper084('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0084 label="Generated 0084" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0084' })).toBeDisabled();
      });
    });
