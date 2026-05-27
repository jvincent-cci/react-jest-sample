import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0601 } from './Component0601';
    import { helper045 } from '../../helpers/helper045';

    describe('Component0601', () => {
      it('applies helper045 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0601 label="Generated 0601" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0601' }));

        expect(onApply).toHaveBeenCalledWith(helper045('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0601 label="Generated 0601" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0601' })).toBeDisabled();
      });
    });
