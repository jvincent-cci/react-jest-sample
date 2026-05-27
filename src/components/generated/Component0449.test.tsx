import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0449 } from './Component0449';
    import { helper042 } from '../../helpers/helper042';

    describe('Component0449', () => {
      it('applies helper042 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0449 label="Generated 0449" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0449' }));

        expect(onApply).toHaveBeenCalledWith(helper042('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0449 label="Generated 0449" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0449' })).toBeDisabled();
      });
    });
