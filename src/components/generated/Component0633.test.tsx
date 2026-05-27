import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0633 } from './Component0633';
    import { helper085 } from '../../helpers/helper085';

    describe('Component0633', () => {
      it('applies helper085 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0633 label="Generated 0633" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0633' }));

        expect(onApply).toHaveBeenCalledWith(helper085('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0633 label="Generated 0633" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0633' })).toBeDisabled();
      });
    });
