import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0892 } from './Component0892';
    import { helper062 } from '../../helpers/helper062';

    describe('Component0892', () => {
      it('applies helper062 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0892 label="Generated 0892" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0892' }));

        expect(onApply).toHaveBeenCalledWith(helper062('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0892 label="Generated 0892" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0892' })).toBeDisabled();
      });
    });
