import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0595 } from './Component0595';
    import { helper046 } from '../../helpers/helper046';

    describe('Component0595', () => {
      it('applies helper046 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0595 label="Generated 0595" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0595' }));

        expect(onApply).toHaveBeenCalledWith(helper046('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0595 label="Generated 0595" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0595' })).toBeDisabled();
      });
    });
