import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0574 } from './Component0574';
    import { helper084 } from '../../helpers/helper084';

    describe('Component0574', () => {
      it('applies helper084 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0574 label="Generated 0574" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0574' }));

        expect(onApply).toHaveBeenCalledWith(helper084('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0574 label="Generated 0574" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0574' })).toBeDisabled();
      });
    });
