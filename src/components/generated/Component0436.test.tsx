import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0436 } from './Component0436';
    import { helper020 } from '../../helpers/helper020';

    describe('Component0436', () => {
      it('applies helper020 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0436 label="Generated 0436" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0436' }));

        expect(onApply).toHaveBeenCalledWith(helper020('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0436 label="Generated 0436" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0436' })).toBeDisabled();
      });
    });
