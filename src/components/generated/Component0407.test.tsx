import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0407 } from './Component0407';
    import { helper056 } from '../../helpers/helper056';

    describe('Component0407', () => {
      it('applies helper056 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0407 label="Generated 0407" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0407' }));

        expect(onApply).toHaveBeenCalledWith(helper056('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0407 label="Generated 0407" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0407' })).toBeDisabled();
      });
    });
