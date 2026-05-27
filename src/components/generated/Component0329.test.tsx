import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0329 } from './Component0329';
    import { helper065 } from '../../helpers/helper065';

    describe('Component0329', () => {
      it('applies helper065 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0329 label="Generated 0329" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0329' }));

        expect(onApply).toHaveBeenCalledWith(helper065('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0329 label="Generated 0329" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0329' })).toBeDisabled();
      });
    });
