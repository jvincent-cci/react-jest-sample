import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0804 } from './Component0804';
    import { helper004 } from '../../helpers/helper004';

    describe('Component0804', () => {
      it('applies helper004 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0804 label="Generated 0804" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0804' }));

        expect(onApply).toHaveBeenCalledWith(helper004('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0804 label="Generated 0804" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0804' })).toBeDisabled();
      });
    });
