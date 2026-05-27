import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0995 } from './Component0995';
    import { helper084 } from '../../helpers/helper084';

    describe('Component0995', () => {
      it('applies helper084 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0995 label="Generated 0995" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0995' }));

        expect(onApply).toHaveBeenCalledWith(helper084('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0995 label="Generated 0995" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0995' })).toBeDisabled();
      });
    });
