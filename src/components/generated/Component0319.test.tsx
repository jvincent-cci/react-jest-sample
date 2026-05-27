import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0319 } from './Component0319';
    import { helper067 } from '../../helpers/helper067';

    describe('Component0319', () => {
      it('applies helper067 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0319 label="Generated 0319" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0319' }));

        expect(onApply).toHaveBeenCalledWith(helper067('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0319 label="Generated 0319" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0319' })).toBeDisabled();
      });
    });
