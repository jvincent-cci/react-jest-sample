import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0284 } from './Component0284';
    import { helper005 } from '../../helpers/helper005';

    describe('Component0284', () => {
      it('applies helper005 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0284 label="Generated 0284" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0284' }));

        expect(onApply).toHaveBeenCalledWith(helper005('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0284 label="Generated 0284" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0284' })).toBeDisabled();
      });
    });
