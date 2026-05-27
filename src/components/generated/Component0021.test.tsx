import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0021 } from './Component0021';
    import { helper056 } from '../../helpers/helper056';

    describe('Component0021', () => {
      it('applies helper056 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0021 label="Generated 0021" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0021' }));

        expect(onApply).toHaveBeenCalledWith(helper056('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0021 label="Generated 0021" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0021' })).toBeDisabled();
      });
    });
