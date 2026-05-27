import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0609 } from './Component0609';
    import { helper043 } from '../../helpers/helper043';

    describe('Component0609', () => {
      it('applies helper043 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0609 label="Generated 0609" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0609' }));

        expect(onApply).toHaveBeenCalledWith(helper043('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0609 label="Generated 0609" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0609' })).toBeDisabled();
      });
    });
