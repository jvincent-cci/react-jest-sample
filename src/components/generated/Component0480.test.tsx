import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0480 } from './Component0480';
    import { helper009 } from '../../helpers/helper009';

    describe('Component0480', () => {
      it('applies helper009 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0480 label="Generated 0480" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0480' }));

        expect(onApply).toHaveBeenCalledWith(helper009('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0480 label="Generated 0480" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0480' })).toBeDisabled();
      });
    });
