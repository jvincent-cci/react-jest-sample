import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0396 } from './Component0396';
    import { helper016 } from '../../helpers/helper016';

    describe('Component0396', () => {
      it('applies helper016 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0396 label="Generated 0396" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0396' }));

        expect(onApply).toHaveBeenCalledWith(helper016('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0396 label="Generated 0396" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0396' })).toBeDisabled();
      });
    });
