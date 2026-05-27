import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0448 } from './Component0448';
    import { helper065 } from '../../helpers/helper065';

    describe('Component0448', () => {
      it('applies helper065 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0448 label="Generated 0448" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0448' }));

        expect(onApply).toHaveBeenCalledWith(helper065('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0448 label="Generated 0448" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0448' })).toBeDisabled();
      });
    });
