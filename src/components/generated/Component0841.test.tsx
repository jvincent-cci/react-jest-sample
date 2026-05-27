import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0841 } from './Component0841';
    import { helper071 } from '../../helpers/helper071';

    describe('Component0841', () => {
      it('applies helper071 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0841 label="Generated 0841" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0841' }));

        expect(onApply).toHaveBeenCalledWith(helper071('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0841 label="Generated 0841" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0841' })).toBeDisabled();
      });
    });
