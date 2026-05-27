import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0222 } from './Component0222';
    import { helper001 } from '../../helpers/helper001';

    describe('Component0222', () => {
      it('applies helper001 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0222 label="Generated 0222" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0222' }));

        expect(onApply).toHaveBeenCalledWith(helper001('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0222 label="Generated 0222" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0222' })).toBeDisabled();
      });
    });
