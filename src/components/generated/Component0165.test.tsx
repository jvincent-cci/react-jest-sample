import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0165 } from './Component0165';
    import { helper062 } from '../../helpers/helper062';

    describe('Component0165', () => {
      it('applies helper062 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0165 label="Generated 0165" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0165' }));

        expect(onApply).toHaveBeenCalledWith(helper062('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0165 label="Generated 0165" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0165' })).toBeDisabled();
      });
    });
