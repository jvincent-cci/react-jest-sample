import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0657 } from './Component0657';
    import { helper097 } from '../../helpers/helper097';

    describe('Component0657', () => {
      it('applies helper097 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0657 label="Generated 0657" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0657' }));

        expect(onApply).toHaveBeenCalledWith(helper097('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0657 label="Generated 0657" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0657' })).toBeDisabled();
      });
    });
