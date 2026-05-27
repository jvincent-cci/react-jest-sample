import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0636 } from './Component0636';
    import { helper064 } from '../../helpers/helper064';

    describe('Component0636', () => {
      it('applies helper064 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0636 label="Generated 0636" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0636' }));

        expect(onApply).toHaveBeenCalledWith(helper064('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0636 label="Generated 0636" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0636' })).toBeDisabled();
      });
    });
