import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0908 } from './Component0908';
    import { helper068 } from '../../helpers/helper068';

    describe('Component0908', () => {
      it('applies helper068 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0908 label="Generated 0908" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0908' }));

        expect(onApply).toHaveBeenCalledWith(helper068('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0908 label="Generated 0908" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0908' })).toBeDisabled();
      });
    });
