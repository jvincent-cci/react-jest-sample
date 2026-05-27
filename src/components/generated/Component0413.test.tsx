import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0413 } from './Component0413';
    import { helper029 } from '../../helpers/helper029';

    describe('Component0413', () => {
      it('applies helper029 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0413 label="Generated 0413" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0413' }));

        expect(onApply).toHaveBeenCalledWith(helper029('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0413 label="Generated 0413" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0413' })).toBeDisabled();
      });
    });
