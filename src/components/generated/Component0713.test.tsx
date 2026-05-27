import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0713 } from './Component0713';
    import { helper077 } from '../../helpers/helper077';

    describe('Component0713', () => {
      it('applies helper077 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0713 label="Generated 0713" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0713' }));

        expect(onApply).toHaveBeenCalledWith(helper077('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0713 label="Generated 0713" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0713' })).toBeDisabled();
      });
    });
