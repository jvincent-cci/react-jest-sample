import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0976 } from './Component0976';
    import { helper046 } from '../../helpers/helper046';

    describe('Component0976', () => {
      it('applies helper046 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0976 label="Generated 0976" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0976' }));

        expect(onApply).toHaveBeenCalledWith(helper046('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0976 label="Generated 0976" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0976' })).toBeDisabled();
      });
    });
