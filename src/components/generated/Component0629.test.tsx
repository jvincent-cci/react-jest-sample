import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0629 } from './Component0629';
    import { helper093 } from '../../helpers/helper093';

    describe('Component0629', () => {
      it('applies helper093 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0629 label="Generated 0629" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0629' }));

        expect(onApply).toHaveBeenCalledWith(helper093('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0629 label="Generated 0629" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0629' })).toBeDisabled();
      });
    });
