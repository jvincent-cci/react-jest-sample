import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0036 } from './Component0036';
    import { helper039 } from '../../helpers/helper039';

    describe('Component0036', () => {
      it('applies helper039 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0036 label="Generated 0036" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0036' }));

        expect(onApply).toHaveBeenCalledWith(helper039('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0036 label="Generated 0036" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0036' })).toBeDisabled();
      });
    });
