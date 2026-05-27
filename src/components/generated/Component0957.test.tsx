import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0957 } from './Component0957';
    import { helper015 } from '../../helpers/helper015';

    describe('Component0957', () => {
      it('applies helper015 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0957 label="Generated 0957" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0957' }));

        expect(onApply).toHaveBeenCalledWith(helper015('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0957 label="Generated 0957" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0957' })).toBeDisabled();
      });
    });
