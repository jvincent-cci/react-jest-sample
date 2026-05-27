import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0120 } from './Component0120';
    import { helper038 } from '../../helpers/helper038';

    describe('Component0120', () => {
      it('applies helper038 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0120 label="Generated 0120" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0120' }));

        expect(onApply).toHaveBeenCalledWith(helper038('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0120 label="Generated 0120" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0120' })).toBeDisabled();
      });
    });
