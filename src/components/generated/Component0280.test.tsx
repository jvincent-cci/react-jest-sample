import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0280 } from './Component0280';
    import { helper030 } from '../../helpers/helper030';

    describe('Component0280', () => {
      it('applies helper030 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0280 label="Generated 0280" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0280' }));

        expect(onApply).toHaveBeenCalledWith(helper030('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0280 label="Generated 0280" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0280' })).toBeDisabled();
      });
    });
