import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0644 } from './Component0644';
    import { helper038 } from '../../helpers/helper038';

    describe('Component0644', () => {
      it('applies helper038 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0644 label="Generated 0644" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0644' }));

        expect(onApply).toHaveBeenCalledWith(helper038('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0644 label="Generated 0644" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0644' })).toBeDisabled();
      });
    });
