import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0197 } from './Component0197';
    import { helper015 } from '../../helpers/helper015';

    describe('Component0197', () => {
      it('applies helper015 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0197 label="Generated 0197" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0197' }));

        expect(onApply).toHaveBeenCalledWith(helper015('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0197 label="Generated 0197" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0197' })).toBeDisabled();
      });
    });
