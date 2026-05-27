import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0936 } from './Component0936';
    import { helper086 } from '../../helpers/helper086';

    describe('Component0936', () => {
      it('applies helper086 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0936 label="Generated 0936" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0936' }));

        expect(onApply).toHaveBeenCalledWith(helper086('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0936 label="Generated 0936" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0936' })).toBeDisabled();
      });
    });
