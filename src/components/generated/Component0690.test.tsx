import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0690 } from './Component0690';
    import { helper017 } from '../../helpers/helper017';

    describe('Component0690', () => {
      it('applies helper017 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0690 label="Generated 0690" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0690' }));

        expect(onApply).toHaveBeenCalledWith(helper017('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0690 label="Generated 0690" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0690' })).toBeDisabled();
      });
    });
