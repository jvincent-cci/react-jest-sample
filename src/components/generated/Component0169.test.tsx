import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0169 } from './Component0169';
    import { helper095 } from '../../helpers/helper095';

    describe('Component0169', () => {
      it('applies helper095 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0169 label="Generated 0169" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0169' }));

        expect(onApply).toHaveBeenCalledWith(helper095('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0169 label="Generated 0169" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0169' })).toBeDisabled();
      });
    });
