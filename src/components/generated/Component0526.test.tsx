import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0526 } from './Component0526';
    import { helper001 } from '../../helpers/helper001';

    describe('Component0526', () => {
      it('applies helper001 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0526 label="Generated 0526" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0526' }));

        expect(onApply).toHaveBeenCalledWith(helper001('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0526 label="Generated 0526" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0526' })).toBeDisabled();
      });
    });
