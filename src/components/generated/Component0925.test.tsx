import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0925 } from './Component0925';
    import { helper087 } from '../../helpers/helper087';

    describe('Component0925', () => {
      it('applies helper087 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0925 label="Generated 0925" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0925' }));

        expect(onApply).toHaveBeenCalledWith(helper087('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0925 label="Generated 0925" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0925' })).toBeDisabled();
      });
    });
