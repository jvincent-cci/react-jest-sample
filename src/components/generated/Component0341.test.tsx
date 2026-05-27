import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0341 } from './Component0341';
    import { helper046 } from '../../helpers/helper046';

    describe('Component0341', () => {
      it('applies helper046 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0341 label="Generated 0341" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0341' }));

        expect(onApply).toHaveBeenCalledWith(helper046('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0341 label="Generated 0341" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0341' })).toBeDisabled();
      });
    });
