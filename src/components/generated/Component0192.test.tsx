import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0192 } from './Component0192';
    import { helper056 } from '../../helpers/helper056';

    describe('Component0192', () => {
      it('applies helper056 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0192 label="Generated 0192" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0192' }));

        expect(onApply).toHaveBeenCalledWith(helper056('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0192 label="Generated 0192" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0192' })).toBeDisabled();
      });
    });
