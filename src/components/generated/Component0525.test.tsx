import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0525 } from './Component0525';
    import { helper092 } from '../../helpers/helper092';

    describe('Component0525', () => {
      it('applies helper092 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0525 label="Generated 0525" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0525' }));

        expect(onApply).toHaveBeenCalledWith(helper092('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0525 label="Generated 0525" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0525' })).toBeDisabled();
      });
    });
