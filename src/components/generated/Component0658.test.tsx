import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0658 } from './Component0658';
    import { helper071 } from '../../helpers/helper071';

    describe('Component0658', () => {
      it('applies helper071 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0658 label="Generated 0658" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0658' }));

        expect(onApply).toHaveBeenCalledWith(helper071('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0658 label="Generated 0658" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0658' })).toBeDisabled();
      });
    });
