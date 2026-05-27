import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0820 } from './Component0820';
    import { helper016 } from '../../helpers/helper016';

    describe('Component0820', () => {
      it('applies helper016 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0820 label="Generated 0820" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0820' }));

        expect(onApply).toHaveBeenCalledWith(helper016('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0820 label="Generated 0820" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0820' })).toBeDisabled();
      });
    });
