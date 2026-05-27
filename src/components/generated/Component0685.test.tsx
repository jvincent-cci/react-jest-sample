import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0685 } from './Component0685';
    import { helper017 } from '../../helpers/helper017';

    describe('Component0685', () => {
      it('applies helper017 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0685 label="Generated 0685" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0685' }));

        expect(onApply).toHaveBeenCalledWith(helper017('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0685 label="Generated 0685" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0685' })).toBeDisabled();
      });
    });
