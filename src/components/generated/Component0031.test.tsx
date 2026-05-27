import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0031 } from './Component0031';
    import { helper003 } from '../../helpers/helper003';

    describe('Component0031', () => {
      it('applies helper003 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0031 label="Generated 0031" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0031' }));

        expect(onApply).toHaveBeenCalledWith(helper003('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0031 label="Generated 0031" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0031' })).toBeDisabled();
      });
    });
