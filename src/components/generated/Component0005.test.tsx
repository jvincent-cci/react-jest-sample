import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0005 } from './Component0005';
    import { helper038 } from '../../helpers/helper038';

    describe('Component0005', () => {
      it('applies helper038 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0005 label="Generated 0005" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0005' }));

        expect(onApply).toHaveBeenCalledWith(helper038('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0005 label="Generated 0005" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0005' })).toBeDisabled();
      });
    });
