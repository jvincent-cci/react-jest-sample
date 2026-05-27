import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0077 } from './Component0077';
    import { helper050 } from '../../helpers/helper050';

    describe('Component0077', () => {
      it('applies helper050 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0077 label="Generated 0077" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0077' }));

        expect(onApply).toHaveBeenCalledWith(helper050('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0077 label="Generated 0077" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0077' })).toBeDisabled();
      });
    });
