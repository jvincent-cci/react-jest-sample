import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0049 } from './Component0049';
    import { helper081 } from '../../helpers/helper081';

    describe('Component0049', () => {
      it('applies helper081 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0049 label="Generated 0049" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0049' }));

        expect(onApply).toHaveBeenCalledWith(helper081('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0049 label="Generated 0049" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0049' })).toBeDisabled();
      });
    });
