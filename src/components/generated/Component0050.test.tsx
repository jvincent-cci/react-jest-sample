import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0050 } from './Component0050';
    import { helper039 } from '../../helpers/helper039';

    describe('Component0050', () => {
      it('applies helper039 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0050 label="Generated 0050" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0050' }));

        expect(onApply).toHaveBeenCalledWith(helper039('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0050 label="Generated 0050" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0050' })).toBeDisabled();
      });
    });
