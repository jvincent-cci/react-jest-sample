import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0798 } from './Component0798';
    import { helper027 } from '../../helpers/helper027';

    describe('Component0798', () => {
      it('applies helper027 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0798 label="Generated 0798" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0798' }));

        expect(onApply).toHaveBeenCalledWith(helper027('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0798 label="Generated 0798" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0798' })).toBeDisabled();
      });
    });
