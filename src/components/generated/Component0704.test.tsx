import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0704 } from './Component0704';
    import { helper001 } from '../../helpers/helper001';

    describe('Component0704', () => {
      it('applies helper001 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0704 label="Generated 0704" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0704' }));

        expect(onApply).toHaveBeenCalledWith(helper001('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0704 label="Generated 0704" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0704' })).toBeDisabled();
      });
    });
