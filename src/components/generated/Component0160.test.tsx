import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0160 } from './Component0160';
    import { helper099 } from '../../helpers/helper099';

    describe('Component0160', () => {
      it('applies helper099 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0160 label="Generated 0160" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0160' }));

        expect(onApply).toHaveBeenCalledWith(helper099('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0160 label="Generated 0160" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0160' })).toBeDisabled();
      });
    });
