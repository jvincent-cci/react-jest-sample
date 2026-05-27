import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0719 } from './Component0719';
    import { helper045 } from '../../helpers/helper045';

    describe('Component0719', () => {
      it('applies helper045 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0719 label="Generated 0719" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0719' }));

        expect(onApply).toHaveBeenCalledWith(helper045('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0719 label="Generated 0719" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0719' })).toBeDisabled();
      });
    });
