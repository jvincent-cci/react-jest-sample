import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0542 } from './Component0542';
    import { helper015 } from '../../helpers/helper015';

    describe('Component0542', () => {
      it('applies helper015 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0542 label="Generated 0542" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0542' }));

        expect(onApply).toHaveBeenCalledWith(helper015('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0542 label="Generated 0542" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0542' })).toBeDisabled();
      });
    });
