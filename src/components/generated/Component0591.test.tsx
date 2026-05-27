import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0591 } from './Component0591';
    import { helper085 } from '../../helpers/helper085';

    describe('Component0591', () => {
      it('applies helper085 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0591 label="Generated 0591" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0591' }));

        expect(onApply).toHaveBeenCalledWith(helper085('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0591 label="Generated 0591" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0591' })).toBeDisabled();
      });
    });
