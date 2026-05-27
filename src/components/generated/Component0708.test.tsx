import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0708 } from './Component0708';
    import { helper005 } from '../../helpers/helper005';

    describe('Component0708', () => {
      it('applies helper005 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0708 label="Generated 0708" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0708' }));

        expect(onApply).toHaveBeenCalledWith(helper005('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0708 label="Generated 0708" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0708' })).toBeDisabled();
      });
    });
