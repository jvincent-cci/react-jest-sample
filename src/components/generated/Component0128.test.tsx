import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0128 } from './Component0128';
    import { helper003 } from '../../helpers/helper003';

    describe('Component0128', () => {
      it('applies helper003 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0128 label="Generated 0128" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0128' }));

        expect(onApply).toHaveBeenCalledWith(helper003('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0128 label="Generated 0128" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0128' })).toBeDisabled();
      });
    });
