import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0026 } from './Component0026';
    import { helper083 } from '../../helpers/helper083';

    describe('Component0026', () => {
      it('applies helper083 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0026 label="Generated 0026" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0026' }));

        expect(onApply).toHaveBeenCalledWith(helper083('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0026 label="Generated 0026" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0026' })).toBeDisabled();
      });
    });
