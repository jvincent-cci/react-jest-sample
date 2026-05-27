import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0096 } from './Component0096';
    import { helper083 } from '../../helpers/helper083';

    describe('Component0096', () => {
      it('applies helper083 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0096 label="Generated 0096" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0096' }));

        expect(onApply).toHaveBeenCalledWith(helper083('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0096 label="Generated 0096" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0096' })).toBeDisabled();
      });
    });
