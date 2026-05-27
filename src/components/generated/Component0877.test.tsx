import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0877 } from './Component0877';
    import { helper035 } from '../../helpers/helper035';

    describe('Component0877', () => {
      it('applies helper035 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0877 label="Generated 0877" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0877' }));

        expect(onApply).toHaveBeenCalledWith(helper035('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0877 label="Generated 0877" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0877' })).toBeDisabled();
      });
    });
