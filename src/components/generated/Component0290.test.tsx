import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0290 } from './Component0290';
    import { helper081 } from '../../helpers/helper081';

    describe('Component0290', () => {
      it('applies helper081 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0290 label="Generated 0290" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0290' }));

        expect(onApply).toHaveBeenCalledWith(helper081('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0290 label="Generated 0290" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0290' })).toBeDisabled();
      });
    });
