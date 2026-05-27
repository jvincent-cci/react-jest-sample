import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0345 } from './Component0345';
    import { helper038 } from '../../helpers/helper038';

    describe('Component0345', () => {
      it('applies helper038 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0345 label="Generated 0345" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0345' }));

        expect(onApply).toHaveBeenCalledWith(helper038('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0345 label="Generated 0345" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0345' })).toBeDisabled();
      });
    });
