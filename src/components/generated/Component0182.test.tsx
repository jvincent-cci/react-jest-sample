import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0182 } from './Component0182';
    import { helper057 } from '../../helpers/helper057';

    describe('Component0182', () => {
      it('applies helper057 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0182 label="Generated 0182" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0182' }));

        expect(onApply).toHaveBeenCalledWith(helper057('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0182 label="Generated 0182" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0182' })).toBeDisabled();
      });
    });
