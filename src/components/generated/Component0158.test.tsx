import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0158 } from './Component0158';
    import { helper054 } from '../../helpers/helper054';

    describe('Component0158', () => {
      it('applies helper054 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0158 label="Generated 0158" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0158' }));

        expect(onApply).toHaveBeenCalledWith(helper054('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0158 label="Generated 0158" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0158' })).toBeDisabled();
      });
    });
