import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0234 } from './Component0234';
    import { helper093 } from '../../helpers/helper093';

    describe('Component0234', () => {
      it('applies helper093 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0234 label="Generated 0234" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0234' }));

        expect(onApply).toHaveBeenCalledWith(helper093('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0234 label="Generated 0234" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0234' })).toBeDisabled();
      });
    });
