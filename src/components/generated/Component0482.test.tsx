import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0482 } from './Component0482';
    import { helper086 } from '../../helpers/helper086';

    describe('Component0482', () => {
      it('applies helper086 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0482 label="Generated 0482" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0482' }));

        expect(onApply).toHaveBeenCalledWith(helper086('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0482 label="Generated 0482" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0482' })).toBeDisabled();
      });
    });
