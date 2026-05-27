import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0062 } from './Component0062';
    import { helper032 } from '../../helpers/helper032';

    describe('Component0062', () => {
      it('applies helper032 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0062 label="Generated 0062" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0062' }));

        expect(onApply).toHaveBeenCalledWith(helper032('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0062 label="Generated 0062" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0062' })).toBeDisabled();
      });
    });
