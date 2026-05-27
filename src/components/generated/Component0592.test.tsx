import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0592 } from './Component0592';
    import { helper013 } from '../../helpers/helper013';

    describe('Component0592', () => {
      it('applies helper013 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0592 label="Generated 0592" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0592' }));

        expect(onApply).toHaveBeenCalledWith(helper013('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0592 label="Generated 0592" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0592' })).toBeDisabled();
      });
    });
