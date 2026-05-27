import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0700 } from './Component0700';
    import { helper022 } from '../../helpers/helper022';

    describe('Component0700', () => {
      it('applies helper022 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0700 label="Generated 0700" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0700' }));

        expect(onApply).toHaveBeenCalledWith(helper022('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0700 label="Generated 0700" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0700' })).toBeDisabled();
      });
    });
