import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0414 } from './Component0414';
    import { helper080 } from '../../helpers/helper080';

    describe('Component0414', () => {
      it('applies helper080 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0414 label="Generated 0414" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0414' }));

        expect(onApply).toHaveBeenCalledWith(helper080('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0414 label="Generated 0414" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0414' })).toBeDisabled();
      });
    });
