import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0241 } from './Component0241';
    import { helper023 } from '../../helpers/helper023';

    describe('Component0241', () => {
      it('applies helper023 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0241 label="Generated 0241" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0241' }));

        expect(onApply).toHaveBeenCalledWith(helper023('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0241 label="Generated 0241" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0241' })).toBeDisabled();
      });
    });
