import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0125 } from './Component0125';
    import { helper095 } from '../../helpers/helper095';

    describe('Component0125', () => {
      it('applies helper095 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0125 label="Generated 0125" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0125' }));

        expect(onApply).toHaveBeenCalledWith(helper095('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0125 label="Generated 0125" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0125' })).toBeDisabled();
      });
    });
