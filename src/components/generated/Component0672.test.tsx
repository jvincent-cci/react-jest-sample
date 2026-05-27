import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0672 } from './Component0672';
    import { helper029 } from '../../helpers/helper029';

    describe('Component0672', () => {
      it('applies helper029 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0672 label="Generated 0672" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0672' }));

        expect(onApply).toHaveBeenCalledWith(helper029('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0672 label="Generated 0672" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0672' })).toBeDisabled();
      });
    });
