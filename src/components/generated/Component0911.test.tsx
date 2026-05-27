import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0911 } from './Component0911';
    import { helper056 } from '../../helpers/helper056';

    describe('Component0911', () => {
      it('applies helper056 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0911 label="Generated 0911" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0911' }));

        expect(onApply).toHaveBeenCalledWith(helper056('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0911 label="Generated 0911" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0911' })).toBeDisabled();
      });
    });
