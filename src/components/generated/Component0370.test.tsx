import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0370 } from './Component0370';
    import { helper057 } from '../../helpers/helper057';

    describe('Component0370', () => {
      it('applies helper057 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0370 label="Generated 0370" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0370' }));

        expect(onApply).toHaveBeenCalledWith(helper057('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0370 label="Generated 0370" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0370' })).toBeDisabled();
      });
    });
