import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0295 } from './Component0295';
    import { helper090 } from '../../helpers/helper090';

    describe('Component0295', () => {
      it('applies helper090 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0295 label="Generated 0295" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0295' }));

        expect(onApply).toHaveBeenCalledWith(helper090('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0295 label="Generated 0295" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0295' })).toBeDisabled();
      });
    });
