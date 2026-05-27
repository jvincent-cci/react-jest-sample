import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0977 } from './Component0977';
    import { helper100 } from '../../helpers/helper100';

    describe('Component0977', () => {
      it('applies helper100 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0977 label="Generated 0977" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0977' }));

        expect(onApply).toHaveBeenCalledWith(helper100('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0977 label="Generated 0977" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0977' })).toBeDisabled();
      });
    });
