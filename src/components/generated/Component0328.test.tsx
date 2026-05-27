import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0328 } from './Component0328';
    import { helper067 } from '../../helpers/helper067';

    describe('Component0328', () => {
      it('applies helper067 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0328 label="Generated 0328" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0328' }));

        expect(onApply).toHaveBeenCalledWith(helper067('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0328 label="Generated 0328" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0328' })).toBeDisabled();
      });
    });
