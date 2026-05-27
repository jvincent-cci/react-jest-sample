import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0571 } from './Component0571';
    import { helper055 } from '../../helpers/helper055';

    describe('Component0571', () => {
      it('applies helper055 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0571 label="Generated 0571" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0571' }));

        expect(onApply).toHaveBeenCalledWith(helper055('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0571 label="Generated 0571" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0571' })).toBeDisabled();
      });
    });
