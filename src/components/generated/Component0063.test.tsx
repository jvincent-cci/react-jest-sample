import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0063 } from './Component0063';
    import { helper013 } from '../../helpers/helper013';

    describe('Component0063', () => {
      it('applies helper013 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0063 label="Generated 0063" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0063' }));

        expect(onApply).toHaveBeenCalledWith(helper013('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0063 label="Generated 0063" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0063' })).toBeDisabled();
      });
    });
