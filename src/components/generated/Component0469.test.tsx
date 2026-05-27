import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0469 } from './Component0469';
    import { helper013 } from '../../helpers/helper013';

    describe('Component0469', () => {
      it('applies helper013 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0469 label="Generated 0469" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0469' }));

        expect(onApply).toHaveBeenCalledWith(helper013('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0469 label="Generated 0469" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0469' })).toBeDisabled();
      });
    });
