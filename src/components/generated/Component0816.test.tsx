import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0816 } from './Component0816';
    import { helper074 } from '../../helpers/helper074';

    describe('Component0816', () => {
      it('applies helper074 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0816 label="Generated 0816" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0816' }));

        expect(onApply).toHaveBeenCalledWith(helper074('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0816 label="Generated 0816" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0816' })).toBeDisabled();
      });
    });
