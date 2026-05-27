import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0029 } from './Component0029';
    import { helper047 } from '../../helpers/helper047';

    describe('Component0029', () => {
      it('applies helper047 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0029 label="Generated 0029" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0029' }));

        expect(onApply).toHaveBeenCalledWith(helper047('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0029 label="Generated 0029" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0029' })).toBeDisabled();
      });
    });
