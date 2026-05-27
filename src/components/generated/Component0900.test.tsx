import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0900 } from './Component0900';
    import { helper047 } from '../../helpers/helper047';

    describe('Component0900', () => {
      it('applies helper047 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0900 label="Generated 0900" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0900' }));

        expect(onApply).toHaveBeenCalledWith(helper047('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0900 label="Generated 0900" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0900' })).toBeDisabled();
      });
    });
