import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0570 } from './Component0570';
    import { helper053 } from '../../helpers/helper053';

    describe('Component0570', () => {
      it('applies helper053 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0570 label="Generated 0570" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0570' }));

        expect(onApply).toHaveBeenCalledWith(helper053('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0570 label="Generated 0570" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0570' })).toBeDisabled();
      });
    });
