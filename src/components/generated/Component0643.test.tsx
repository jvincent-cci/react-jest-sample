import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0643 } from './Component0643';
    import { helper017 } from '../../helpers/helper017';

    describe('Component0643', () => {
      it('applies helper017 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0643 label="Generated 0643" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0643' }));

        expect(onApply).toHaveBeenCalledWith(helper017('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0643 label="Generated 0643" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0643' })).toBeDisabled();
      });
    });
