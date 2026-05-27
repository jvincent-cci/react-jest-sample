import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0065 } from './Component0065';
    import { helper011 } from '../../helpers/helper011';

    describe('Component0065', () => {
      it('applies helper011 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0065 label="Generated 0065" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0065' }));

        expect(onApply).toHaveBeenCalledWith(helper011('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0065 label="Generated 0065" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0065' })).toBeDisabled();
      });
    });
