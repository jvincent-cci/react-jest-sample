import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0393 } from './Component0393';
    import { helper069 } from '../../helpers/helper069';

    describe('Component0393', () => {
      it('applies helper069 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0393 label="Generated 0393" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0393' }));

        expect(onApply).toHaveBeenCalledWith(helper069('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0393 label="Generated 0393" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0393' })).toBeDisabled();
      });
    });
