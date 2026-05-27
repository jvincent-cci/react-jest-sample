import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0453 } from './Component0453';
    import { helper078 } from '../../helpers/helper078';

    describe('Component0453', () => {
      it('applies helper078 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0453 label="Generated 0453" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0453' }));

        expect(onApply).toHaveBeenCalledWith(helper078('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0453 label="Generated 0453" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0453' })).toBeDisabled();
      });
    });
