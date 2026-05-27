import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0367 } from './Component0367';
    import { helper042 } from '../../helpers/helper042';

    describe('Component0367', () => {
      it('applies helper042 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0367 label="Generated 0367" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0367' }));

        expect(onApply).toHaveBeenCalledWith(helper042('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0367 label="Generated 0367" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0367' })).toBeDisabled();
      });
    });
