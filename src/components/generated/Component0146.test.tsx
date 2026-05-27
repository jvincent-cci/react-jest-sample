import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0146 } from './Component0146';
    import { helper031 } from '../../helpers/helper031';

    describe('Component0146', () => {
      it('applies helper031 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0146 label="Generated 0146" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0146' }));

        expect(onApply).toHaveBeenCalledWith(helper031('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0146 label="Generated 0146" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0146' })).toBeDisabled();
      });
    });
