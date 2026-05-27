import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0268 } from './Component0268';
    import { helper082 } from '../../helpers/helper082';

    describe('Component0268', () => {
      it('applies helper082 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0268 label="Generated 0268" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0268' }));

        expect(onApply).toHaveBeenCalledWith(helper082('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0268 label="Generated 0268" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0268' })).toBeDisabled();
      });
    });
