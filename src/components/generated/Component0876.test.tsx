import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0876 } from './Component0876';
    import { helper061 } from '../../helpers/helper061';

    describe('Component0876', () => {
      it('applies helper061 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0876 label="Generated 0876" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0876' }));

        expect(onApply).toHaveBeenCalledWith(helper061('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0876 label="Generated 0876" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0876' })).toBeDisabled();
      });
    });
