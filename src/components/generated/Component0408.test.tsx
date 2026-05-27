import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0408 } from './Component0408';
    import { helper073 } from '../../helpers/helper073';

    describe('Component0408', () => {
      it('applies helper073 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0408 label="Generated 0408" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0408' }));

        expect(onApply).toHaveBeenCalledWith(helper073('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0408 label="Generated 0408" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0408' })).toBeDisabled();
      });
    });
