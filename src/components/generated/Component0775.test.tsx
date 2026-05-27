import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0775 } from './Component0775';
    import { helper095 } from '../../helpers/helper095';

    describe('Component0775', () => {
      it('applies helper095 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0775 label="Generated 0775" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0775' }));

        expect(onApply).toHaveBeenCalledWith(helper095('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0775 label="Generated 0775" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0775' })).toBeDisabled();
      });
    });
