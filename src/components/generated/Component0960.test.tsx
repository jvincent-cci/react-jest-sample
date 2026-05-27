import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0960 } from './Component0960';
    import { helper044 } from '../../helpers/helper044';

    describe('Component0960', () => {
      it('applies helper044 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0960 label="Generated 0960" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0960' }));

        expect(onApply).toHaveBeenCalledWith(helper044('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0960 label="Generated 0960" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0960' })).toBeDisabled();
      });
    });
