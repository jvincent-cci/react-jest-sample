import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0237 } from './Component0237';
    import { helper082 } from '../../helpers/helper082';

    describe('Component0237', () => {
      it('applies helper082 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0237 label="Generated 0237" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0237' }));

        expect(onApply).toHaveBeenCalledWith(helper082('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0237 label="Generated 0237" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0237' })).toBeDisabled();
      });
    });
