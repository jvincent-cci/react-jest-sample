import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0561 } from './Component0561';
    import { helper007 } from '../../helpers/helper007';

    describe('Component0561', () => {
      it('applies helper007 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0561 label="Generated 0561" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0561' }));

        expect(onApply).toHaveBeenCalledWith(helper007('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0561 label="Generated 0561" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0561' })).toBeDisabled();
      });
    });
