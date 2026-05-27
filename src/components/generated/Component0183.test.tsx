import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0183 } from './Component0183';
    import { helper044 } from '../../helpers/helper044';

    describe('Component0183', () => {
      it('applies helper044 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0183 label="Generated 0183" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0183' }));

        expect(onApply).toHaveBeenCalledWith(helper044('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0183 label="Generated 0183" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0183' })).toBeDisabled();
      });
    });
