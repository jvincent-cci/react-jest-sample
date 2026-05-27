import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0551 } from './Component0551';
    import { helper055 } from '../../helpers/helper055';

    describe('Component0551', () => {
      it('applies helper055 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0551 label="Generated 0551" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0551' }));

        expect(onApply).toHaveBeenCalledWith(helper055('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0551 label="Generated 0551" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0551' })).toBeDisabled();
      });
    });
