import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0190 } from './Component0190';
    import { helper092 } from '../../helpers/helper092';

    describe('Component0190', () => {
      it('applies helper092 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0190 label="Generated 0190" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0190' }));

        expect(onApply).toHaveBeenCalledWith(helper092('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0190 label="Generated 0190" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0190' })).toBeDisabled();
      });
    });
