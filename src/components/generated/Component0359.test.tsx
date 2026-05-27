import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0359 } from './Component0359';
    import { helper027 } from '../../helpers/helper027';

    describe('Component0359', () => {
      it('applies helper027 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0359 label="Generated 0359" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0359' }));

        expect(onApply).toHaveBeenCalledWith(helper027('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0359 label="Generated 0359" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0359' })).toBeDisabled();
      });
    });
