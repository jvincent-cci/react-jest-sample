import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0797 } from './Component0797';
    import { helper080 } from '../../helpers/helper080';

    describe('Component0797', () => {
      it('applies helper080 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0797 label="Generated 0797" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0797' }));

        expect(onApply).toHaveBeenCalledWith(helper080('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0797 label="Generated 0797" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0797' })).toBeDisabled();
      });
    });
