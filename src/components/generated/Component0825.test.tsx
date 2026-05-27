import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0825 } from './Component0825';
    import { helper056 } from '../../helpers/helper056';

    describe('Component0825', () => {
      it('applies helper056 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0825 label="Generated 0825" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0825' }));

        expect(onApply).toHaveBeenCalledWith(helper056('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0825 label="Generated 0825" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0825' })).toBeDisabled();
      });
    });
