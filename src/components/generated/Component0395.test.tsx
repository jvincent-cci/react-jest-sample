import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0395 } from './Component0395';
    import { helper062 } from '../../helpers/helper062';

    describe('Component0395', () => {
      it('applies helper062 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0395 label="Generated 0395" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0395' }));

        expect(onApply).toHaveBeenCalledWith(helper062('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0395 label="Generated 0395" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0395' })).toBeDisabled();
      });
    });
