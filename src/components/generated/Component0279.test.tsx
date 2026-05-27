import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0279 } from './Component0279';
    import { helper073 } from '../../helpers/helper073';

    describe('Component0279', () => {
      it('applies helper073 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0279 label="Generated 0279" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0279' }));

        expect(onApply).toHaveBeenCalledWith(helper073('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0279 label="Generated 0279" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0279' })).toBeDisabled();
      });
    });
