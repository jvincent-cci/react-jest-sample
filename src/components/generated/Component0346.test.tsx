import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0346 } from './Component0346';
    import { helper052 } from '../../helpers/helper052';

    describe('Component0346', () => {
      it('applies helper052 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0346 label="Generated 0346" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0346' }));

        expect(onApply).toHaveBeenCalledWith(helper052('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0346 label="Generated 0346" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0346' })).toBeDisabled();
      });
    });
