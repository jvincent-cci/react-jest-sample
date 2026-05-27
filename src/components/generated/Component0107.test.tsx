import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0107 } from './Component0107';
    import { helper054 } from '../../helpers/helper054';

    describe('Component0107', () => {
      it('applies helper054 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0107 label="Generated 0107" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0107' }));

        expect(onApply).toHaveBeenCalledWith(helper054('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0107 label="Generated 0107" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0107' })).toBeDisabled();
      });
    });
