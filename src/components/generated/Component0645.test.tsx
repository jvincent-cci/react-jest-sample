import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0645 } from './Component0645';
    import { helper075 } from '../../helpers/helper075';

    describe('Component0645', () => {
      it('applies helper075 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0645 label="Generated 0645" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0645' }));

        expect(onApply).toHaveBeenCalledWith(helper075('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0645 label="Generated 0645" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0645' })).toBeDisabled();
      });
    });
