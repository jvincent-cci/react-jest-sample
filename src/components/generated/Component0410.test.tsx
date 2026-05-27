import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0410 } from './Component0410';
    import { helper034 } from '../../helpers/helper034';

    describe('Component0410', () => {
      it('applies helper034 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0410 label="Generated 0410" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0410' }));

        expect(onApply).toHaveBeenCalledWith(helper034('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0410 label="Generated 0410" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0410' })).toBeDisabled();
      });
    });
