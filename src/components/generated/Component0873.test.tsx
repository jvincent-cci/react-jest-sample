import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0873 } from './Component0873';
    import { helper004 } from '../../helpers/helper004';

    describe('Component0873', () => {
      it('applies helper004 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0873 label="Generated 0873" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0873' }));

        expect(onApply).toHaveBeenCalledWith(helper004('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0873 label="Generated 0873" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0873' })).toBeDisabled();
      });
    });
