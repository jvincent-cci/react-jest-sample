import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0524 } from './Component0524';
    import { helper059 } from '../../helpers/helper059';

    describe('Component0524', () => {
      it('applies helper059 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0524 label="Generated 0524" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0524' }));

        expect(onApply).toHaveBeenCalledWith(helper059('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0524 label="Generated 0524" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0524' })).toBeDisabled();
      });
    });
