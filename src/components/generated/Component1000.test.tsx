import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component1000 } from './Component1000';
    import { helper083 } from '../../helpers/helper083';

    describe('Component1000', () => {
      it('applies helper083 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component1000 label="Generated 1000" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 1000' }));

        expect(onApply).toHaveBeenCalledWith(helper083('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component1000 label="Generated 1000" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 1000' })).toBeDisabled();
      });
    });
