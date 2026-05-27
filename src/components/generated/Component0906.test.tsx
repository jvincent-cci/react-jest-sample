import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0906 } from './Component0906';
    import { helper001 } from '../../helpers/helper001';

    describe('Component0906', () => {
      it('applies helper001 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0906 label="Generated 0906" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0906' }));

        expect(onApply).toHaveBeenCalledWith(helper001('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0906 label="Generated 0906" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0906' })).toBeDisabled();
      });
    });
