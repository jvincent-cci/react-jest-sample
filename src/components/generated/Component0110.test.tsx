import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0110 } from './Component0110';
    import { helper002 } from '../../helpers/helper002';

    describe('Component0110', () => {
      it('applies helper002 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0110 label="Generated 0110" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0110' }));

        expect(onApply).toHaveBeenCalledWith(helper002('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0110 label="Generated 0110" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0110' })).toBeDisabled();
      });
    });
