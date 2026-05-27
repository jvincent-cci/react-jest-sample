import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0246 } from './Component0246';
    import { helper010 } from '../../helpers/helper010';

    describe('Component0246', () => {
      it('applies helper010 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0246 label="Generated 0246" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0246' }));

        expect(onApply).toHaveBeenCalledWith(helper010('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0246 label="Generated 0246" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0246' })).toBeDisabled();
      });
    });
