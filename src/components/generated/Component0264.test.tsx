import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0264 } from './Component0264';
    import { helper069 } from '../../helpers/helper069';

    describe('Component0264', () => {
      it('applies helper069 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0264 label="Generated 0264" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0264' }));

        expect(onApply).toHaveBeenCalledWith(helper069('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0264 label="Generated 0264" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0264' })).toBeDisabled();
      });
    });
