import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0998 } from './Component0998';
    import { helper090 } from '../../helpers/helper090';

    describe('Component0998', () => {
      it('applies helper090 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0998 label="Generated 0998" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0998' }));

        expect(onApply).toHaveBeenCalledWith(helper090('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0998 label="Generated 0998" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0998' })).toBeDisabled();
      });
    });
