import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0640 } from './Component0640';
    import { helper052 } from '../../helpers/helper052';

    describe('Component0640', () => {
      it('applies helper052 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0640 label="Generated 0640" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0640' }));

        expect(onApply).toHaveBeenCalledWith(helper052('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0640 label="Generated 0640" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0640' })).toBeDisabled();
      });
    });
