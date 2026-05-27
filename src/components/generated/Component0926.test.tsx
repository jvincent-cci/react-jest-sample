import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0926 } from './Component0926';
    import { helper060 } from '../../helpers/helper060';

    describe('Component0926', () => {
      it('applies helper060 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0926 label="Generated 0926" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0926' }));

        expect(onApply).toHaveBeenCalledWith(helper060('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0926 label="Generated 0926" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0926' })).toBeDisabled();
      });
    });
