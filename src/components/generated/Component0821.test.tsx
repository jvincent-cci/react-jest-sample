import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0821 } from './Component0821';
    import { helper098 } from '../../helpers/helper098';

    describe('Component0821', () => {
      it('applies helper098 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0821 label="Generated 0821" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0821' }));

        expect(onApply).toHaveBeenCalledWith(helper098('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0821 label="Generated 0821" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0821' })).toBeDisabled();
      });
    });
