import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0669 } from './Component0669';
    import { helper081 } from '../../helpers/helper081';

    describe('Component0669', () => {
      it('applies helper081 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0669 label="Generated 0669" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0669' }));

        expect(onApply).toHaveBeenCalledWith(helper081('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0669 label="Generated 0669" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0669' })).toBeDisabled();
      });
    });
