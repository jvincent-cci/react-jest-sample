import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0415 } from './Component0415';
    import { helper022 } from '../../helpers/helper022';

    describe('Component0415', () => {
      it('applies helper022 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0415 label="Generated 0415" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0415' }));

        expect(onApply).toHaveBeenCalledWith(helper022('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0415 label="Generated 0415" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0415' })).toBeDisabled();
      });
    });
