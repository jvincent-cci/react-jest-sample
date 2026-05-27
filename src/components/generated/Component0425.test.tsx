import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0425 } from './Component0425';
    import { helper007 } from '../../helpers/helper007';

    describe('Component0425', () => {
      it('applies helper007 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0425 label="Generated 0425" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0425' }));

        expect(onApply).toHaveBeenCalledWith(helper007('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0425 label="Generated 0425" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0425' })).toBeDisabled();
      });
    });
