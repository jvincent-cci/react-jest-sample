import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0569 } from './Component0569';
    import { helper046 } from '../../helpers/helper046';

    describe('Component0569', () => {
      it('applies helper046 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0569 label="Generated 0569" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0569' }));

        expect(onApply).toHaveBeenCalledWith(helper046('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0569 label="Generated 0569" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0569' })).toBeDisabled();
      });
    });
