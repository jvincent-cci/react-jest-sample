import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0310 } from './Component0310';
    import { helper039 } from '../../helpers/helper039';

    describe('Component0310', () => {
      it('applies helper039 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0310 label="Generated 0310" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0310' }));

        expect(onApply).toHaveBeenCalledWith(helper039('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0310 label="Generated 0310" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0310' })).toBeDisabled();
      });
    });
