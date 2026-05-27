import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0334 } from './Component0334';
    import { helper055 } from '../../helpers/helper055';

    describe('Component0334', () => {
      it('applies helper055 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0334 label="Generated 0334" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0334' }));

        expect(onApply).toHaveBeenCalledWith(helper055('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0334 label="Generated 0334" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0334' })).toBeDisabled();
      });
    });
