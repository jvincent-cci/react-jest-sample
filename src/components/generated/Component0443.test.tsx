import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0443 } from './Component0443';
    import { helper007 } from '../../helpers/helper007';

    describe('Component0443', () => {
      it('applies helper007 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0443 label="Generated 0443" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0443' }));

        expect(onApply).toHaveBeenCalledWith(helper007('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0443 label="Generated 0443" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0443' })).toBeDisabled();
      });
    });
