import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0807 } from './Component0807';
    import { helper075 } from '../../helpers/helper075';

    describe('Component0807', () => {
      it('applies helper075 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0807 label="Generated 0807" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0807' }));

        expect(onApply).toHaveBeenCalledWith(helper075('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0807 label="Generated 0807" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0807' })).toBeDisabled();
      });
    });
