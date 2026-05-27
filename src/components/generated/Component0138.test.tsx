import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0138 } from './Component0138';
    import { helper069 } from '../../helpers/helper069';

    describe('Component0138', () => {
      it('applies helper069 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0138 label="Generated 0138" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0138' }));

        expect(onApply).toHaveBeenCalledWith(helper069('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0138 label="Generated 0138" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0138' })).toBeDisabled();
      });
    });
