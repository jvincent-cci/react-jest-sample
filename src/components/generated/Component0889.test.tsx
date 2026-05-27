import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0889 } from './Component0889';
    import { helper087 } from '../../helpers/helper087';

    describe('Component0889', () => {
      it('applies helper087 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0889 label="Generated 0889" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0889' }));

        expect(onApply).toHaveBeenCalledWith(helper087('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0889 label="Generated 0889" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0889' })).toBeDisabled();
      });
    });
