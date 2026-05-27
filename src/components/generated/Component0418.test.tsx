import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0418 } from './Component0418';
    import { helper032 } from '../../helpers/helper032';

    describe('Component0418', () => {
      it('applies helper032 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0418 label="Generated 0418" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0418' }));

        expect(onApply).toHaveBeenCalledWith(helper032('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0418 label="Generated 0418" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0418' })).toBeDisabled();
      });
    });
