import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0793 } from './Component0793';
    import { helper050 } from '../../helpers/helper050';

    describe('Component0793', () => {
      it('applies helper050 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0793 label="Generated 0793" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0793' }));

        expect(onApply).toHaveBeenCalledWith(helper050('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0793 label="Generated 0793" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0793' })).toBeDisabled();
      });
    });
