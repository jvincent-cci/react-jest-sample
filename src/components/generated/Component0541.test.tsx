import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0541 } from './Component0541';
    import { helper046 } from '../../helpers/helper046';

    describe('Component0541', () => {
      it('applies helper046 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0541 label="Generated 0541" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0541' }));

        expect(onApply).toHaveBeenCalledWith(helper046('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0541 label="Generated 0541" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0541' })).toBeDisabled();
      });
    });
