import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0142 } from './Component0142';
    import { helper077 } from '../../helpers/helper077';

    describe('Component0142', () => {
      it('applies helper077 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0142 label="Generated 0142" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0142' }));

        expect(onApply).toHaveBeenCalledWith(helper077('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0142 label="Generated 0142" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0142' })).toBeDisabled();
      });
    });
