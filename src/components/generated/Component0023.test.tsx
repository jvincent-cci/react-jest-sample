import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0023 } from './Component0023';
    import { helper056 } from '../../helpers/helper056';

    describe('Component0023', () => {
      it('applies helper056 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0023 label="Generated 0023" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0023' }));

        expect(onApply).toHaveBeenCalledWith(helper056('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0023 label="Generated 0023" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0023' })).toBeDisabled();
      });
    });
