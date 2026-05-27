import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0203 } from './Component0203';
    import { helper065 } from '../../helpers/helper065';

    describe('Component0203', () => {
      it('applies helper065 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0203 label="Generated 0203" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0203' }));

        expect(onApply).toHaveBeenCalledWith(helper065('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0203 label="Generated 0203" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0203' })).toBeDisabled();
      });
    });
