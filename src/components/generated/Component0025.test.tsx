import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0025 } from './Component0025';
    import { helper095 } from '../../helpers/helper095';

    describe('Component0025', () => {
      it('applies helper095 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0025 label="Generated 0025" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0025' }));

        expect(onApply).toHaveBeenCalledWith(helper095('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0025 label="Generated 0025" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0025' })).toBeDisabled();
      });
    });
