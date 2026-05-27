import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0032 } from './Component0032';
    import { helper054 } from '../../helpers/helper054';

    describe('Component0032', () => {
      it('applies helper054 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0032 label="Generated 0032" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0032' }));

        expect(onApply).toHaveBeenCalledWith(helper054('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0032 label="Generated 0032" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0032' })).toBeDisabled();
      });
    });
