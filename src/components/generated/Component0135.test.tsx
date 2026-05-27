import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0135 } from './Component0135';
    import { helper082 } from '../../helpers/helper082';

    describe('Component0135', () => {
      it('applies helper082 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0135 label="Generated 0135" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0135' }));

        expect(onApply).toHaveBeenCalledWith(helper082('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0135 label="Generated 0135" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0135' })).toBeDisabled();
      });
    });
