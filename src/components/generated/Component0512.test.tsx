import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0512 } from './Component0512';
    import { helper064 } from '../../helpers/helper064';

    describe('Component0512', () => {
      it('applies helper064 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0512 label="Generated 0512" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0512' }));

        expect(onApply).toHaveBeenCalledWith(helper064('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0512 label="Generated 0512" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0512' })).toBeDisabled();
      });
    });
