import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0442 } from './Component0442';
    import { helper011 } from '../../helpers/helper011';

    describe('Component0442', () => {
      it('applies helper011 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0442 label="Generated 0442" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0442' }));

        expect(onApply).toHaveBeenCalledWith(helper011('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0442 label="Generated 0442" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0442' })).toBeDisabled();
      });
    });
