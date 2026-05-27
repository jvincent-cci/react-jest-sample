import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0137 } from './Component0137';
    import { helper057 } from '../../helpers/helper057';

    describe('Component0137', () => {
      it('applies helper057 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0137 label="Generated 0137" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0137' }));

        expect(onApply).toHaveBeenCalledWith(helper057('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0137 label="Generated 0137" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0137' })).toBeDisabled();
      });
    });
