import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0037 } from './Component0037';
    import { helper059 } from '../../helpers/helper059';

    describe('Component0037', () => {
      it('applies helper059 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0037 label="Generated 0037" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0037' }));

        expect(onApply).toHaveBeenCalledWith(helper059('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0037 label="Generated 0037" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0037' })).toBeDisabled();
      });
    });
