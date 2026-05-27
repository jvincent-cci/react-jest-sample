import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0631 } from './Component0631';
    import { helper081 } from '../../helpers/helper081';

    describe('Component0631', () => {
      it('applies helper081 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0631 label="Generated 0631" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0631' }));

        expect(onApply).toHaveBeenCalledWith(helper081('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0631 label="Generated 0631" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0631' })).toBeDisabled();
      });
    });
