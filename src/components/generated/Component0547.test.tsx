import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0547 } from './Component0547';
    import { helper092 } from '../../helpers/helper092';

    describe('Component0547', () => {
      it('applies helper092 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0547 label="Generated 0547" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0547' }));

        expect(onApply).toHaveBeenCalledWith(helper092('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0547 label="Generated 0547" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0547' })).toBeDisabled();
      });
    });
