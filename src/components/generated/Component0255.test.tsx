import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0255 } from './Component0255';
    import { helper079 } from '../../helpers/helper079';

    describe('Component0255', () => {
      it('applies helper079 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0255 label="Generated 0255" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0255' }));

        expect(onApply).toHaveBeenCalledWith(helper079('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0255 label="Generated 0255" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0255' })).toBeDisabled();
      });
    });
